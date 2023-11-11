import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Heading, Container, Flex, Box, HStack} from 'native-base';
import TabsNavigation from '../components/TabsNavigation';
import CardHomeCompany from '../components/CardHomeCompany';
import dataRecentApplicant from "../dataRecentApplicant" // Sesuaikan dengan path yang benar

const HomeCompanyScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Container paddingTop={60}>
  <HStack space={2} alignItems="center" justifyContent="space-between">
    {/* Teks "Hello Telkom Sigma" */}
    <Box>
      <Heading px={30}>Hello</Heading>
      <Heading px={30}>Telkom Sigma</Heading>
    </Box>

    {/* Gambar rounded (logo) */}
    <Image
      source={{ uri: 'https://lokerbumn.com/wp-content/uploads/2022/06/Telkomsigma.jpg' }}
      style={{ width: 80, height: 80, borderRadius: 40 }}
    />
  </HStack>
</Container>
      <ScrollView style={{ flex: 1, marginBottom: 5 }}>
        {/* Tampilkan data dari dataRecentApplicant */}
        {dataRecentApplicant.map((applicant) => (
          <CardHomeCompany key={applicant.id} job={applicant} navigation={navigation} />
        ))}
      </ScrollView>
      <TabsNavigation />
    </View>
  );
};

export default HomeCompanyScreen;
