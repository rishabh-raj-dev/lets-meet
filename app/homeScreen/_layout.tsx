import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, PanResponder } from 'react-native';
import { Entypo } from 'react-native-vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const profiles = [
  {
    id: '0',
    name: 'Shreya Singh',
    image: 'https://www.instagram.com/p/C2rAwvAIDhs/media/?size=l',
    prompts: [
      { id: '1', prompt: 'This year, I really want to', answer: 'Turn Vegan' },
      { id: '2', prompt: 'Best travel story', answer: 'Hitchhiking in Germany' },
    ],
  },
  {
    id: '1',
    name: 'Megha K',
    image: 'https://www.instagram.com/p/C27SU9sNMXO/media/?size=l',
    prompts: [
      { id: '1', prompt: "What's your favorite hobby?", answer: 'Painting landscapes' },
      { id: '2', prompt: 'Describe your dream job.', answer: 'Wildlife photographer' },
    ],
  },
  {
    id: '2',
    name: 'Utkarsh K',
    image: 'https://www.instagram.com/p/Cy8XwyCNeCR/media/?size=l',
    prompts: [
      { id: '1', prompt: "What's your favorite hobby?", answer: 'Painting landscapes' },
      { id: '2', prompt: 'Describe your dream job.', answer: 'Wildlife photographer' },
    ],
  },
  {
    id: '3',
    name: 'Megha K',
    image: 'https://www.instagram.com/p/C27SU9sNMXO/media/?size=l',
    prompts: [
      { id: '1', prompt: "What's your favorite hobby?", answer: 'Painting landscapes' },
      { id: '2', prompt: 'Describe your dream job.', answer: 'Wildlife photographer' },
    ],
  },
  {
    id: '4',
    name: 'Megha K',
    image: 'https://www.instagram.com/p/CmeiXSoyMXL/media/?size=l',
    prompts: [
      { id: '1', prompt: "What's your favorite hobby?", answer: 'Painting landscapes' },
      { id: '2', prompt: 'Describe your dream job.', answer: 'Wildlife photographer' },
    ],
  },
  // Add more profiles as needed
];

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction) => {
    const newCurrentIndex = direction === 'right' ? currentIndex + 1 : currentIndex + 1;
    setCurrentIndex(newCurrentIndex);
    position.setValue({ x: 0, y: 0 });
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-90deg', '0deg', '90deg'],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  const renderProfiles = () => {
    return profiles.map((profile, index) => {
      if (index < currentIndex) {
        return null;
      } else if (index === currentIndex) {
        return (
          <Animated.View
            key={profile.id}
            {...panResponder.panHandlers}
            style={[getCardStyle(), styles.cardContainer]}
          >
            <Image source={{ uri: profile.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.profileName}>{profile.name}</Text>
              <View style={styles.promptContainer}>
                {profile.prompts.map((prompt) => (
                  <View key={prompt.id} style={styles.prompt}>
                    <Text style={styles.promptQuestion}>{prompt.prompt}</Text>
                    <Text style={styles.promptAnswer}>{prompt.answer}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Animated.View>
        );
      } else {
        return null; // Rendered cards that have been swiped away
      }
    });
  };

  return <View style={styles.container}>{renderProfiles()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: SCREEN_WIDTH ,
    height: SCREEN_WIDTH + 100,
    position: 'absolute',
  },
  cardImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promptContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  prompt: {
    marginBottom: 10,
  },
  promptQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  promptAnswer: {
    fontSize: 18,
  },
});

export default HomeScreen;
