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
  Image,
  Card,
  CardItem,
  Subtitle,
  Body,
  Right,
  Icon,
} from "native-base";
import { StackNavigator } from "react-navigation";

const CompanyProfileScreen = ({ navigation, company }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get company data from backend
    fetch("https://example.com/api/companies/" + company.id)
      .then((response) => response.json())
      .then((data) => {
        setCompany(data);
        setIsLoading(false);
      });
  }, [company]);

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <Title>Company Profile</Title>
        <Left>
          <Button
            onPress={onBack}
            icon={<Icon name="arrow-back" />}
          />
        </Left>
      </Header>
      <Body>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Card>
            <CardItem>
              <Image source={{ uri: company.image }} />
            </CardItem>
            <CardItem>
              <Subtitle>Company Name</Subtitle>
              <Body>{company.name}</Body>
            </CardItem>
            <CardItem>
              <Subtitle>Location</Subtitle>
              <Body>{company.location}</Body>
            </CardItem>
            <CardItem>
              <Subtitle>Email Address</Subtitle>
              <Body>{company.email}</Body>
            </CardItem>
            <CardItem>
              <Subtitle>Phone Number</Subtitle>
              <Body>{company.phone}</Body>
            </CardItem>
            <CardItem>
              <Subtitle>Type</Subtitle>
              <Body>{company.type}</Body>
            </CardItem>
            <CardItem>
              <Subtitle>About</Subtitle>
              <Body>{company.about}</Body>
            </CardItem>
          </Card>
        )}
      </Body>
    </Container>
  );
};

const App = () => {
  return (
    <StackNavigator initialRouteName="CompanyProfile">
      <StackNavigator.Screen
        name="CompanyProfile"
        component={CompanyProfileScreen}
      />
    </StackNavigator>
  );
};

export default App;
