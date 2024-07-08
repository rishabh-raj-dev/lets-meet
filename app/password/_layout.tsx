import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    Image,
    TouchableOpacity,
    SafeAreaView
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
//   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//   import Fontisto from 'react-native-vector-icons/Fontisto';
  import {useNavigation} from '@react-navigation/native';
import { AntDesign, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
//   import {
//     getRegistrationProgress,
//     saveRegistrationProgress,
//   } from '../registrationUtils';
  
  const Password = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
  const router = useRouter();
    const handleNext = () => {
      if (password.trim() !== '') {
        router.push('/birth');
        // Save the current progress data including the name
        // saveRegistrationProgress('Password', {password});
      }
      router.push('/birth');
      // Navigate to the next screen
    //   navigation.navigate('Birth');
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
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                borderColor: '#BEBEBE',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <AntDesign name="lock1" size={26} color="white" />
              {/* <Fontisto name="" size={26} color="white" /> */}
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
            Please choose your password
          </Text>
  
          <TextInput
            secureTextEntry={true}
            autoFocus={true}
            value={password}
            onChangeText={text => setPassword(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: password ? 22 : 22,
              marginTop: 25,
              borderBottomColor: '#BEBEBE',
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: 'GeezaPro-Bold',
              color: 'white',
            }}
            placeholder="Enter your password"
            placeholderTextColor={'#BEBEBE'}
          />
          <Text style={{color: 'gray', fontSize: 15, marginTop: 7}}>
            Note: Please use a strong password
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
  
  export default Password;
  
  const styles = StyleSheet.create({});
  