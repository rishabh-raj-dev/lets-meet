import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useRef, useState, useEffect} from 'react';
  import {useNavigation} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
//   import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//   import {
//     getRegistrationProgress,
//     saveRegistrationProgress,
//   } from '../registrationUtils';
  
  const BirthScreen = () => {
  
    const monthRef = useRef<TextInput>(null);
    const yearRef = useRef<TextInput>(null);
    const [day, setDay] = useState<string>('');
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<string>('');
  
    const handleDayChange = (text: string) => {
      setDay(text);
      if (text.length === 2) {
        monthRef.current?.focus();
      }
    };
  
    const handleMonthChange = (text: string) => {
      setMonth(text);
      if (text.length === 2) {
        yearRef.current?.focus();
      }
    };
  
    const handleYearChange = (text: string) => {
      setYear(text);
    };
    // useEffect(() => {
    //   // Fetch the registration progress data for the "Birth" screen
    // //   getRegistrationProgress('Birth').then(progressData => {
    // //     if (progressData) {
    // //       const {dateOfBirth} = progressData;
    // //       // Split the date of birth string into day, month, and year
    // //       const [dayValue, monthValue, yearValue] = dateOfBirth.split('/');
    // //       // Set the values in the component state
    // //       setDay(dayValue);
    // //       setMonth(monthValue);
    // //       setYear(yearValue);
    // //     }
    //   });
    // }, []);
    const router = useRouter()
    const handleNext = () => {
      // Check if all the date values are provided
      if (day.trim() !== '' && month.trim() !== '' && year.trim() !== '') {
        // Construct the date string in the desired format
        const dateOfBirth = `${day}/${month}/${year}`;
        router.push('/collegeDetails');
        // Save the current progress data including the date of birth
        // saveRegistrationProgress('Birth', {dateOfBirth});
  
        // // Navigate to the next screen
        // navigation.navigate('Location'); // Or navigate to the appropriate screen
      } else {
        // Handle the case where the user hasn't provided all the date values
        // You can display a message or take appropriate action here
      }
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
                borderColor: '#BEBEBE',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="cake-variant-outline"
                size={26}
                color="white"
              />
            </View>
    
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              
              marginTop: 15,
              color: 'white',
            }}>
            What's your date of birth?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              marginTop: 80,
              justifyContent: 'center',
            }}>
            {/* Day Input Field */}
            <TextInput
              autoFocus={true}
              style={{
                borderBottomWidth: 1,
                borderColor: '#BEBEBE',
                padding: 10,
                width: 50,
                fontSize: day ? 20 : 20,
                fontFamily: 'GeezaPro-Bold',
                color: 'white',
              }}
              placeholder="DD"
              placeholderTextColor={'#BEBEBE'}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={handleDayChange}
              value={day}
            />
  
            {/* Month Input Field */}
            <TextInput
              ref={monthRef}
              style={{
                borderBottomWidth: 1,
                borderColor: '#BEBEBE',
                padding: 10,
                width: 60,
                fontSize: month ? 20 : 20,
                fontFamily: 'GeezaPro-Bold',
                color: 'white',
              }}
              placeholder="MM"
              placeholderTextColor={'#BEBEBE'}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={handleMonthChange}
              value={month}
            />
  
            {/* Year Input Field */}
            <TextInput
              ref={yearRef}
              style={{
                borderBottomWidth: 1,
                borderColor: '#BEBEBE',
                padding: 10,
                width: 75,
                fontSize: year ? 20 : 20,
                fontFamily: 'GeezaPro-Bold',
                color: 'white',
              }}
              placeholder="YYYY"
              keyboardType="numeric"
              placeholderTextColor={'#BEBEBE'}
              maxLength={4}
              onChangeText={handleYearChange}
              value={year}
            />
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
  
  export default BirthScreen;
  
  const styles = StyleSheet.create({});
  