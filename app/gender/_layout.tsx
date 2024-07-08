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
import { AntDesign, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
//   import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';
  
  const GenderScreen = () => {
    const [gender, setGender] = useState('');
    const navigation = useNavigation();
    useEffect(() => {
    //   getRegistrationProgress('Gender').then((progressData) => {
    //     if (progressData) {
    //       setGender(progressData.gender || '');
    //     }
    //   });
    }, []);

    const router = useRouter()
    const handleNext = () => {
      if (gender.trim() !== '') {
        router.push('/datingIntention');
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
              <MaterialCommunityIcons
                name="newspaper-variant-outline"
                size={26}
                color="white"
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
         
              marginTop: 15,
            }}>
            Which gender descibes you the best?
          </Text>
  
          <Text style={{marginTop: 30, fontSize: 15, color: 'gray'}}>
            Hook users are matched based on these three gender groups. You can
            add more about gender after
          </Text>
  
          <View style={{marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'white'}}>Men</Text>
              <Pressable onPress={() => setGender('Men')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={gender == 'Men' ? 'red' : 'gray'}
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 12,
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'white'}}>Women</Text>
              <Pressable onPress={() => setGender('Women')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={gender == 'Women' ? 'red' : 'gray'}
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: '500', fontSize: 15, color: 'white'}}>Non-binary</Text>
              <Pressable onPress={() => setGender('Non-binary')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={gender == 'Non-binary' ? 'red' : 'gray'}
                />
              </Pressable>
            </View>
          </View>
  
          <View
            style={{
              marginTop: 30,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <AntDesign name="checksquare" size={26} color="gray" />
            <Text style={{fontSize: 15, color: 'white'}}>Visible on profile</Text>
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
  
  export default GenderScreen;
  
  const styles = StyleSheet.create({});
  