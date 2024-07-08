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
  import React, {useState,useEffect} from 'react';
//   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//   import Fontisto from 'react-native-vector-icons/Fontisto';
  import {useNavigation} from '@react-navigation/native';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
//   import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';
  
  const EmailScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    // useEffect(() => {
    //   getRegistrationProgress('Email').then((progressData) => {
    //     if (progressData) {
    //       setEmail(progressData.email || '');
    //     }
    //   });
    // }, []);
  const router = useRouter();
    const handleNext = () => {
      if (email.trim() !== '') {
          console.log("name",email)
        // Save the current progress data including the name
        // saveRegistrationProgress('Email', { email });
        router.push('/password');
      }
      // Navigate to the next screen
      router.push('/password');
    };
    return (
        <LinearGradient
        colors={['purple', 'black' ]}
        style={{flex: 1, alignItems: 'center'}}
        
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
        <View style={{marginTop: 10, marginHorizontal: 20}}>
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
              <Fontisto name="email" size={26} color="white" />
            </View>
            {/* <Image
              style={{width: 100, height: 40}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
              }}
            /> */}
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              marginTop: 15,
              color: 'white',
            }}>
            Please provide a valid email
          </Text>
  
          <Text style={{marginTop: 30, fontSize: 15, color: 'gray'}}>
            Email verification helps us keep your account secure.{' '}
            <Text style={{color: '#581845', fontWeight: '500'}}>Learn more</Text>
          </Text>
          <TextInput
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: email ? 22 : 22,
              marginTop: 25,
              borderBottomColor: '#BEBEBE',
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: 'GeezaPro-Bold',
              color:"white"
            }}
            placeholder="Enter your email"
            placeholderTextColor={'#BEBEBE'}
          />
          <Text style={{color: 'gray', fontSize: 15, marginTop: 7}}>
            Note: You will be asked to verify your email
          </Text>
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
  
  export default EmailScreen;
  
  const styles = StyleSheet.create({});
  