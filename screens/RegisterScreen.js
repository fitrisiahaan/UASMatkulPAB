// RegisterScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormControl, Input, Heading, Text, Button, Center, Box, Link } from 'native-base';

const RegisterScreen = ({ navigation }) => {
  const [profileName, setProfileName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const handleRegister = async () => {
    let hasError = false;
  
    if (profileName === '') {
      setIsNameError(true);
      hasError = true;
    } else {
      setIsNameError(false);
    }
  
    if (email === '') {
      setIsEmailError(true);
      hasError = true;
    } else {
      setIsEmailError(false);
    }
  
    if (password === '') {
      setIsPasswordError(true);
      hasError = true;
    } else {
      setIsPasswordError(false);
    }
  
    if (!hasError) {
      // Simulasi registrasi dengan menyimpan data pengguna di AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify({ profileName, email, password }));
      console.log('Pendaftaran berhasil');
      navigation.navigate('Search'); // Navigasi ke HomeScreen setelah registrasi
    }
  };
  
  return (
    <View>
      <Center>
        <Heading paddingTop="100">Buat Akun Baru!</Heading>
        <Text fontSize="xs">Lorem ipsum dolor sit amet, consectetur</Text>

        <FormControl isRequired isInvalid={isNameError} paddingTop="90" paddingX="10" variant="outline">
          <FormControl.Label>Nama Profil</FormControl.Label>
          <Input
            p={2}
            placeholder="Nama Profil"
            onChangeText={(text) => setProfileName(text)}
          />
          {isNameError && <FormControl.ErrorMessage>Nama Profil wajib diisi.</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={isEmailError} paddingY="2" paddingX="10" variant="outline">
          <FormControl.Label>Alamat Email</FormControl.Label>
          <Input p={2} placeholder="Email" onChangeText={(text) => setEmail(text)} />
          {isEmailError && <FormControl.ErrorMessage>Email wajib diisi.</FormControl.ErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={isPasswordError} paddingY="2" paddingX="10" variant="outline">
          <FormControl.Label>Kata Sandi</FormControl.Label>
          <Input
            p={2}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry // Menyembunyikan karakter password
          />
          {isPasswordError && <FormControl.ErrorMessage>Kata Sandi wajib diisi.</FormControl.ErrorMessage>}
        </FormControl>

        <Button
          mt={4}
          mx={8}
          rounded={15}
          colorScheme="danger"
          size="md"
          onPress={handleRegister}
        >
          Mulai Karier Anda
        </Button>

        <Box alignItems="center" paddingTop="140">
          <Text mx="16"> Masuk ke Akun Baru</Text>
          <Text mx="16">
            Sudah punya akun?{' '}
            <Link
              onPress={() => navigation.navigate('Login')}
              isExternal
              _text={{
                color: 'red.400',
              }}
              mt={-0.5}
              _web={{
                mb: -2,
              }}
            >
              Masuk
            </Link>
          </Text>
        </Box>
      </Center>
    </View>
  );
};

export default RegisterScreen;