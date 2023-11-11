import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import { StackNavigator } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const [companyName, setCompanyName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Set default values for state
    setCompanyName("PT. Contoh Perusahaan");
    setEmailAddress("contoh@perusahaan.com");
    setPassword("rahasia");
  }, []);

  const onSubmit = () => {
    // Submit form data
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Header>
        <Title>Sign Up</Title>
      </Header>
      <Body>
        <Form>
          <Item floatingLabel>
            <Label>Company Name</Label>
            <Input
              value={companyName}
              onChangeText={text => setCompanyName(text)}
              placeholder={"Nama Perusahaan"}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email Address</Label>
            <Input
              value={emailAddress}
              onChangeText={text => setEmailAddress(text)}
              placeholder={"Alamat Email"}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder={"Kata Sandi"}
              secureTextEntry={true}
            />
          </Item>
          <Button onPress={onSubmit}>
            <Text>Sign Up</Text>
          </Button>
        </Form>
      </Body>
    </Container>
  );
};

const App = () => {
  return (
    <StackNavigator initialRouteName="Signup">
      <StackNavigator.Screen
        name="Signup"
        component={SignupScreen}
      />
      <StackNavigator.Screen
        name="Home"
        component={() => <Text>Home Screen</Text>}
      />
    </StackNavigator>
  );
};

export default App;
