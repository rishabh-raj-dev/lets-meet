import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Animated, TextInput, Modal } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_OUT_DURATION = 250;

const profiles = [
  {
    id: '0',
    name: 'Shreya Singh',
    image: 'https://en.idor.org/wp-content/uploads/2023/10/16482628_5764322-1536x1536.jpg',
    prompts: [
      { id: '1', prompt: 'This year, I really want to', answer: 'Turn Vegan' },
      { id: '2', prompt: 'Best travel story', answer: 'Hitchhiking in Germany' },
    ],
  },
  {
    id: '1',
    name: 'Megha K',
    image: 'https://en.idor.org/wp-content/uploads/2023/10/16482628_5764322-1536x1536.jpg',
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleLike = () => {
    forceSwipe('right');
  };

  const handleDislike = () => {
    forceSwipe('left');
  };

  const handleDirectMessage = () => {
    console.log('Direct message to:', profiles[currentIndex]?.name);
  };

  const handleChats = () => {
    setIsModalVisible(true);
  };

  const handleProfileSettings = () => {
    console.log('Go to profile settings');
  };

  const forceSwipe = (direction) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction) => {
    const newCurrentIndex = currentIndex + 1;
    if (newCurrentIndex >= profiles.length) {
      setCurrentIndex(profiles.length);
    } else {
      setCurrentIndex(newCurrentIndex);
    }
    position.setValue({ x: 0, y: 0 });
  };

  const handleSendMessage = () => {
    console.log('Sending message:', message);
    setIsModalVisible(false); // Close modal after sending message

    // Logic to send message (example: console log for demonstration)
    console.log('Message sent:', message);

    // Logic to change profile (example: increment currentIndex)
    const newCurrentIndex = currentIndex + 1;
    if (newCurrentIndex >= profiles.length) {
      setCurrentIndex(profiles.length);
    } else {
      setCurrentIndex(newCurrentIndex);
    }
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
    if (currentIndex >= profiles.length) {
      return (
        <View style={styles.noMoreProfiles}>
          <Text style={styles.noMoreProfilesText}>No more profiles</Text>
        </View>
      );
    }

    return profiles.map((profile, index) => {
      if (index < currentIndex) {
        return null;
      } else if (index === currentIndex) {
        return (
          <Animated.View
            key={profile.id}
            style={[getCardStyle(), styles.cardContainer]}
          >
            <Image source={{ uri: profile.image }} style={styles.cardImage} />
            <View style={styles.overlay}>
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
        return null;
      }
    });
  };

  return (
    <LinearGradient
      colors={['purple', 'black']}
      style={{ flex: 1, alignItems: 'center' }}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png',
          }}
        />
        {renderProfiles()}
        {currentIndex < profiles.length && (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={handleDislike}>
              <Entypo name="cross" size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDirectMessage}>
              <Entypo name="message" size={30} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLike}>
              <Entypo name="heart" size={30} color="green" />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity style={styles.bottomButton} onPress={handleChats}>
            <Entypo name="chat" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton} onPress={handleProfileSettings}>
            <Entypo name="cog" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              value={message}
              onChangeText={(text) => setMessage(text)}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.predefinedMessage} onPress={() => setMessage('Hi')}>
              <Text>Hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.predefinedMessage} onPress={() => setMessage("What's up?")}>
              <Text>What's up?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.predefinedMessage} onPress={() => setMessage("Let's hook up!")}>
              <Text>Let's hook up!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  cardContainer: {
    width: SCREEN_WIDTH - 40,
    height: SCREEN_WIDTH + 90,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    justifyContent: 'flex-end',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  promptContainer: {
    marginBottom: 10,
  },
  prompt: {
    marginBottom: 10,
  },
  promptQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  promptAnswer: {
    fontSize: 18,
    color: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    position: 'absolute',
    bottom: 100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#581845',
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    position: 'absolute',
    bottom: 20,
  },
  bottomButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sendButton: {
    backgroundColor: '#581845',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  predefinedMessage: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noMoreProfiles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoreProfilesText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
