import React from "react";
import { View } from "react-native";
import { Text, Button, Center, Image } from "native-base";

const GetStartedScreen = ({ navigation }) => {
  return (
    <View>
      <Center mt="100">
        <Image
          source={{
            uri: "https://images.saasworthy.com/careerconnect_11895_logo_1662616978_ygesw.png",
          }}
          alt="Alternate Text"
          size="xl"
          style={{width:'70%'}}
        />
      </Center>
      <Center mb="40" mt="20">
        <Text mx="10" textAlign="center">
          {" "}
          Temukan kemmpuan dan jadilah manusia hebat dalam menemukan pekerjaan.
          Dengan aplikasi Carrer Connect yang membantu mu menemukan karir impian
          mu
        </Text>
      </Center>

      {/* <Button
        mt={8}
        mx={60}
        variant={"outline"}
        rounded={18}
        colorScheme="danger"
        size="md"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </Button> */}

      <Button
        mt={2}
        mx={60}
        rounded={18}
        colorScheme="danger"
        size="md"
        onPress={() => navigation.navigate("Login")}
      >
        Login Mahasiswa
      </Button>
      <Button
        mt={2}
        mx={60}
        rounded={18}
        colorScheme="danger"
        size="md"
        onPress={() => navigation.navigate("LoginCompany")}
      >
        Login Perusahaan
      </Button>
      <Center mx="20">
        <Text fontSize="xs" textAlign="center">
          Dengan masuk sebagai pengguna saya menerima Ketentuan Layanan dan
          Kebijakan Privasi.
        </Text>
      </Center>
    </View>
  );
};

export default GetStartedScreen;
