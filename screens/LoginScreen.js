import React from 'react';
import { View } from 'react-native';
import { FormControl, Input, Heading, Text, Button, Center, Box, Link } from 'native-base';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Center >
        <Heading paddingTop="100">Login mahasiswa </Heading>
        <Text fontSize="xs">silahkan login dengan memasukkan Email dan kata sandi anda</Text>

          <FormControl isRequired isInvalid paddingTop="90" paddingX="10">
            <FormControl.Label>Email </FormControl.Label>
            <Input p={2} placeholder="Email" />
            <FormControl.Label>Kata Sandi</FormControl.Label>
            <Input p={2} placeholder="Password" />
            {/* <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage> */}
            <Button
              mt={8}
              mx={8}
              rounded={15}
              colorScheme="danger"
              size="md"
              onPress={() => navigation.navigate('Search')}
            >
              Login
            </Button>
          </FormControl>
          <Box alignItems="center" paddingTop="210">
            <Text mx="16"> Log in ke akun saya</Text>
            <Text mx="16">
              Apakah anda punya akun ?{" "}
              <Link onPress={() => navigation.navigate('Register')} isExternal _text={{
              color: "red.400"
            }} mt={-0.5} _web={{
              mb: -2
            }}>
                Sign Up
              </Link>
            </Text>
        </Box>;
      </Center>
    </View>
  );
};

export default LoginScreen;
