// LoginScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormControl, Input, Heading, Text, Button, Center, Box, Link } from 'native-base';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = async () => {
    try {
      // Mengambil data pengguna dari AsyncStorage
      const userJSON = await AsyncStorage.getItem('user');

      if (userJSON) {
        const user = JSON.parse(userJSON);

        // Memeriksa apakah email dan password sesuai dengan data di AsyncStorage
        if (email === user.email && password === user.password) {
          setIsError(false);
          navigation.navigate('Search'); // Navigasi ke halaman pencarian setelah login berhasil
        } else {
          setIsError(true);
        }
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View>
      <Center>
        <Heading paddingTop="100">Login to Your Account!</Heading>
        <Text fontSize="xs">Lorem ipsum dolor sit amet, consectetur</Text>

        <FormControl isRequired isInvalid={isError} paddingTop="90" paddingX="10">
          <FormControl.Label>Email Address</FormControl.Label>
          <Input p={2} placeholder="Email" onChangeText={(text) => setEmail(text)} />
          <FormControl.Label>Password</FormControl.Label>
          <Input p={2} placeholder="Password" onChangeText={(text) => setPassword(text)} secureTextEntry />
          {isError && <FormControl.ErrorMessage>Email or password is incorrect.</FormControl.ErrorMessage>}
          <Button
            mt={8}
            mx={8}
            rounded={15}
            colorScheme="danger"
            size="md"
            onPress={handleLogin}
          >
            Login
          </Button>
        </FormControl>

        <Box alignItems="center" paddingTop="210">
          <Text mx="16"> Log In to My Account</Text>
          <Text mx="16">
            Don't have an account?{' '}
            <Link onPress={() => navigation.navigate('Register')} isExternal _text={{ color: "red.400" }} mt={-0.5} _web={{ mb: -2 }}>
              Sign Up
            </Link>
          </Text>
        </Box>
      </Center>
    </View>
  );
};

export default LoginScreen;
