import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [option, setOption] = useState('Create account');
  const [college, setCollege] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const router = useRouter();

  const createAccount = () => {
    router.push('/createAccount');
  };

  const collegeOptions :any  = [
    { label: 'KJ College of Arts & Commerce', value: 'kjac' },
    { label: 'KJ College of Engineering', value: 'kjsce' },
    { label: 'KJ Institute of Technology', value: 'kjsit' },
  ];

  const departmentOptions :any = [
    { label: 'COMPS', value: 'comps' },
    { label: 'MECH', value: 'mech' },
    { label: 'EXTC', value: 'extc' },
    { label: 'AIDS', value: 'aids' },
    { label: 'IT', value: 'it' },
  ];

  const yearOptions :any = [
    { label: 'First Year', value: '1' },
    { label: 'Second Year', value: '2' },
    { label: 'Third Year', value: '3' },
    { label: 'Fourth Year', value: '4' },
  ];
    
    const handleNext = () => {
        if (college.trim() !== '' && department.trim() !== '' && year.trim() !== '') {
        router.push('/gender');
        }
    };

  return (
   
    <LinearGradient
      colors={['purple', 'black']}
      style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}
    > 
     
      <View
        style={{
          height: 200,
          marginTop: 50,
          width: '100%',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 75,
          }}
        >
          <Image
            style={{ width: 180, height: 100, resizeMode: 'contain' }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/4310/4310217.png',
            }}
          />
        </View>
      </View>

      <KeyboardAvoidingView>




        <View style={{ marginTop: 20, width:300 }}>
      
          

          <View style={{ marginTop: 20, width: 300}}>
            <Text style={{ color: 'white', marginBottom: 5 }}>
              Select College
            </Text>
            <DropDownPicker
        open={collegeOpen}
        value={college}
        items={collegeOptions}
        setOpen={setCollegeOpen}
        setValue={setCollege}
        setItems={collegeOptions}
        style={styles.dropdown}
        placeholder="Select a college"
        zIndex={3000} // Higher zIndex for the first dropdown
        zIndexInverse={1000}
      />

      <Text style={styles.label}>Select Department</Text>
      <DropDownPicker
        open={departmentOpen}
        value={department}
        items={departmentOptions}
        setOpen={setDepartmentOpen}
        setValue={setDepartment}
        setItems={departmentOptions}
        style={styles.dropdown}
        placeholder="Select a department"
        zIndex={2000} // Lower zIndex than the first dropdown but higher than the third
        zIndexInverse={2000}
      />

      <Text style={styles.label}>Select Year</Text>
      <DropDownPicker
        open={yearOpen}
        value={year}
        items={yearOptions}
        setOpen={setYearOpen}
        setValue={setYear}
        setItems={yearOptions}
        style={styles.dropdown}
        placeholder="Select a year"
        zIndex={1000} // Lowest zIndex
        zIndexInverse={3000}
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
      </KeyboardAvoidingView>
    </LinearGradient>
    
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#581845',
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30,
    backgroundColor: '#581845',
    marginBottom: 10,
  },
});
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    color: 'white',
    marginBottom: 5,
    marginTop: 20,
  },
  dropdown: {
    marginBottom: 20,
  },
});