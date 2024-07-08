import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Pressable,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState,useEffect} from 'react';
//   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//   import FontAwesome from 'react-native-vector-icons/FontAwesome';
//   import AntDesign from 'react-native-vector-icons/AntDesign';
  import {useNavigation} from '@react-navigation/native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useRouter } from 'expo-router';
//   import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';
  
  const IntentScreen = () => {
    const [intent, setIntent] = useState('');
    const navigation = useNavigation();
    useEffect(() => {
    //   getRegistrationProgress('Gender').then((progressData) => {
    //     if (progressData) {
    //       setGender(progressData.gender || '');
    //     }
    //   });
    }, []);
  
    const handleNext = () => {
      if (intent.trim() !== '') {
        router.push('photo');
        // Save the current progress data including the name
        // saveRegistrationProgress('Gender', { gender });
      }
      // Navigate to the next screen
    //   navigation.navigate('Type');
    };
    return (
        <LinearGradient
        colors={['purple', 'black']}
        style={{ flex: 1, alignItems: 'center' }}
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

        <View style={{marginTop: 90, marginHorizontal: 20}}>
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
              <AntDesign name="hearto" size={22} color="white" />
            </View> 
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
         
              marginTop: 15,
            }}>
            What is your Dating Intention?
          </Text>
  
          <Text style={{marginTop: 30, fontSize: 15, color: 'gray'}}>
            Hook users are matched based on their Dating Intention.
          </Text>
  
          <View style={{marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'white'}}>Long-Term Relationship</Text>
              <Pressable onPress={() => setIntent('Long')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={intent == 'Long' ? 'red' : 'gray'}
                />
              </Pressable>
            </View>
           
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 17,
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'white'}}>Long-Term, Open for Short</Text>
              <Pressable onPress={() => setIntent('Long2Short')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={intent == 'Long2Short' ? 'red' : 'gray'}
                />
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'white'}}>Short-Term, Open for Long</Text>
              <Pressable onPress={() => setIntent('Short2Long')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={intent == 'Short2Long' ? 'red' : 'gray'}
                />
              </Pressable>
              
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 17,
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'white'}}>Short-Term, Open for Long</Text>
              <Pressable onPress={() => setIntent('Short2Long')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={intent == 'Short2Long' ? 'red' : 'gray'}
                />
              </Pressable>
            </View>
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
  
  export default IntentScreen;
  
  const styles = StyleSheet.create({});
  