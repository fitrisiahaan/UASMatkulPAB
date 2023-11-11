import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, NativeBaseProvider,Input } from 'native-base';
import TabsNavigation from '../components/TabsNavigation';

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Ambil data pengguna dari AsyncStorage saat komponen dipasang
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Mengambil data pengguna dari AsyncStorage
      const userJSON = await AsyncStorage.getItem('user');

      if (userJSON) {
        const user = JSON.parse(userJSON);
        setUserData(user);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleChangeImage = () => {
    // Implement your logic for changing the user's image here
    console.log('Change Image button pressed');
    // Anda dapat menambahkan logika penggantian gambar di sini
  };
  
  const handleLogout = async () => {
    // Implementasikan logika logout di sini, seperti menghapus data pengguna dari AsyncStorage
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('GetStarted'); // Navigasi ke halaman GetStarted setelah logout
      console.log('Logout button pressed');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Box style={styles.background} borderBottomLeftRadius={30} borderBottomRightRadius={30}>
          <Box pt="100">
            <Image source={{ uri: userData.photo || 'https://placekitten.com/200/200' }} style={styles.image} />
            <Box pl="7" pt="1">
              <Text style={{ fontSize: 14,  color:"#fff",fontWeight:'bold' }}>{userData.profileName}</Text>
              <Text style={{ fontSize: 14,  color:"#fff"}}>{userData.email}</Text>
            </Box>
            <Box flexDirection="row" justifyContent="space-between" paddingHorizontal="12" marginTop="4">
              <TouchableOpacity style={styles.changeImageButton} onPress={handleChangeImage}>
                <Text style={styles.buttonText}>Change Image</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.buttonText}> <Image source={require('../assets/Icons/logout.png')} style={styles.buttonIcon} /> Logout</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </Box>
        <Box pl="7" pt="10">
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nama</Text>
                <Input
                placeholder="Nama"
                value={userData.profileName}
                isDisabled
                style={styles.input}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <Input
                placeholder="Email"
                value={userData.email}
                isDisabled
                style={styles.input}
                />
            </View>
        </Box>
        <View style={styles.tabsContainer}>
          <TabsNavigation />
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background:{
    backgroundColor: '#FD3E3E',
    paddingVertical: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    top: 20,
    left: 30,
  },
  changeImageButton: {
    backgroundColor: '#FD5151',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 8,
    marginLeft: 25,
  },
  logoutButton: {
    backgroundColor: '#FD5151',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginRight: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  input: {
    backgroundColor: '#E9E9E9',
    borderRadius: 100, // Atur nilai sesuai dengan tingkat curve yang diinginkan
    paddingLeft: 10,
    height: 40,
    width: '100%',
    color:'black'
  },
  inputContainer: {
    marginBottom: 18,
    width: 380,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: 'black',
  },
});

export default ProfileScreen;