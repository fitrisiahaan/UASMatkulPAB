import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
  View,
} from "native-base";

const Stack = createNativeStackNavigator(); // Create a Stack Navigator

const CompanyProfileScreen = ({ navigation, route }) => {
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get company data from backend
    fetch("https://example.com/api/companies/" + route.params.companyId)
      .then((response) => response.json())
      .then((data) => {
        setCompany(data);
        setIsLoading(false);
      });
  }, []);

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <Title>Company Profile</Title>
        <Left>
          <Button onPress={onBack} icon={<Icon name="arrow-back" />} />
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
            {/* ... other CardItems */}
          </Card>
        )}
      </Body>
    </Container>
  );
};

export default CompanyProfileScreen;
