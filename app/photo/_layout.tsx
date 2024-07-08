import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Pressable, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function PhotoSelect() {
  const [imageUrls, setImageUrls] = useState<any>(Array(6).fill(null));
  const [imageUrl, setImageUrl] = useState('');

  const pickImage = async (index: number) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 5],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const newImageUrls = [...imageUrls];
      newImageUrls[index] = result.assets[0].uri;
      setImageUrls(newImageUrls);
    }
  };

  const handleAddImage = () => {
    const emptyIndex = imageUrls.indexOf(null);
    if (imageUrl && emptyIndex !== -1) {
      const newImageUrls = [...imageUrls];
      newImageUrls[emptyIndex] = imageUrl;
      setImageUrl('');
      setImageUrls(newImageUrls);
    }
  };

  const handleDeleteImage = (index: number) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1); // Remove the image at the given index
    newImageUrls.push(null); // Add a null at the end to maintain the length
    setImageUrls(newImageUrls);
  };
 const router = useRouter()
  const handleNext = () => {
    console.log('Next button pressed');
    // Add navigation logic here
    router.push('/homeScreen')
  };

  return (
    <LinearGradient
    colors={['purple', 'black']}
    style={{ flex: 1, alignItems: 'center' }}
  > 
    <SafeAreaView>
    <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 75,
          }}>
          <Image
            style={{width: 180, height: 100, resizeMode: 'contain'}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png',
            }}
          />
        </View>
      <View style={{ marginTop: 70, marginHorizontal: 20 }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                borderColor: 'white',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="camera-outline"
                size={26}
                color="white"/>
            </View>
          </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
            color: 'white',
          }}>
          Pick your photos
        </Text>
        <View style={{ marginTop: 20 }}>
          <View style={styles.gridContainer}>
            {imageUrls.slice(0, 3).map((url: any, index: any) => (
              <View key={index} style={styles.imageWrapper}>
                <Pressable
                  onPress={() => pickImage(index)}
                  style={[styles.imageContainer, url && { borderWidth: 0 }]}>
                  {url ? (
                    <>
                      <Image
                        source={{ uri: url }}
                        style={styles.image}
                      />
                      <TouchableOpacity
                        style={styles.deleteIcon}
                        onPress={() => handleDeleteImage(index)}
                      >
                        <MaterialCommunityIcons name="close-circle" size={24} color="red" />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <EvilIcons name="image" size={22} color="black" />
                  )}
                </Pressable>
              </View>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={styles.gridContainer}>
            {imageUrls.slice(3, 6).map((url: any, index: any) => (
              <View key={index + 3} style={styles.imageWrapper}>
                <Pressable
                  onPress={() => pickImage(index + 3)}
                  style={[styles.imageContainer, url && { borderWidth: 0 }]}>
                  {url ? (
                    <>
                      <Image
                        source={{ uri: url }}
                        style={styles.image}
                      />
                      <TouchableOpacity
                        style={styles.deleteIcon}
                        onPress={() => handleDeleteImage(index + 3)}
                      >
                        <MaterialCommunityIcons name="close-circle" size={24} color="red" />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <EvilIcons name="image" size={22} color="black" />
                  )}
                </Pressable>
              </View>
            ))}
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'gray',
              marginTop: 3,
            }}>
            Add four to six photos
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: 'auto' }}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="white"
            style={{ alignSelf: 'center', marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  imageWrapper: {
    position: 'relative',
    width: '30%',
    aspectRatio: 1,
  },
  imageContainer: {
    borderColor: 'gray',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderRadius: 10,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  deleteIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#DCDCDC',
  },
});
