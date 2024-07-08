import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
//   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import {useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
//   import {
//     getRegistrationProgress,
//     saveRegistrationProgress,
//   } from '../registrationUtils';
  
  const NameScreen = () => {
    const [firstName, setFirstName] = useState('');
    const navigation = useNavigation();
    // useEffect(() => {
    //   getRegistrationProgress('Name').then(progressData => {
    //     if (progressData) {
    //       setFirstName(progressData.firstName || '');
    //     }
    //   });
    // }, []);
    const router = useRouter();
    const handleNext = () => {
      if (firstName.trim() !== '') {
        // Save the current progress data including the name
        // saveRegistrationProgress('Name', { firstName });
      }
      // Navigate to the next screen
        router.push('/emailScreen');
    };
    return (
        <LinearGradient
        colors={['purple', 'black' ]}
        style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}
        
      >
      <SafeAreaView style={{flex: 1}}>
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

        <View style={{marginTop: 30, marginHorizontal: 20}}>
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
                name="newspaper-variant-outline"
                size={26}
                color="white"
              />
            </View>
            {/* <Image
              style={{width: 100, height: 40}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
              }}
            /> */}
          </View>
  
          <View style={{marginTop: 30}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                fontFamily: 'GeezaPro-Bold',
                color: 'white',
              }}>
              What's your name?
            </Text>
            <TextInput
              autoFocus={true}
            //   value={"Rishabh"}
            //   onChangeText={text => setFirstName(text)}
              style={{
                width: 340,
                marginVertical: 10,
                fontSize: "Rishabh" ? 22 : 22,
                marginTop: 25,
                borderBottomColor: '#BEBEBE',
                borderBottomWidth: 1,
                paddingBottom: 10,
                fontFamily: 'GeezaPro-Bold',
                color:"white"
              }}
              placeholder="First name (required)"
              placeholderTextColor={'#BEBEBE'}
            />
            <TextInput
              style={{
                width: 340,
                marginVertical: 10,
                fontSize: "firstName" ? 22 : 22,
                marginTop: 25,
                borderBottomColor: '#BEBEBE',
                borderBottomWidth: 1,
                paddingBottom: 10,
                fontFamily: 'GeezaPro-Bold',
                color:"white"
              }}
              placeholder="Last name"
              placeholderTextColor={'#BEBEBE'}
            />
            <Text style={{fontSize: 15, color: 'gray', fontWeight: '500'}}>
              Last name is optional.
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
            style={{marginTop: 30, marginLeft: 'auto'}}>
            <MaterialCommunityIcons
              name="arrow-right-circle"
              size={45}
              color="white"
              style={{alignSelf: 'center', marginTop: 20}}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      </LinearGradient>
    );
  };
  
  export default NameScreen;
  
  const styles = StyleSheet.create({});
  