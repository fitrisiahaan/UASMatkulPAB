import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Box, Image, Text, HStack, Container, Button, el } from "native-base";
import { useNavigation } from "@react-navigation/native";
import TabsNavigation from "../components/TabsNavigation";

const JobDetail = ({ route }) => {
  const { job } = route.params;
  const navigation = useNavigation();

  const handleApplyNow = () => {
    // Navigasi ke Home Company Screen
    navigation.navigate("HomeCompany");
  };

  return (
    <View style={{ flex: 1 }}>
      <Container paddingTop={45}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Icons/back.png")}
            style={{ width: 19, height: 15, marginLeft: 20 }}
          />
        </TouchableOpacity>
      </Container>
      <ScrollView mb="10">
        {/* MASALAH */}
       
        
        {/* Box untuk header dengan warna merah */}
        <Box bg="#FD3E3E" px={8} py={6} mt={20}>
        <Image
              size={100}
              borderRadius={75}
              source={{ uri: job.logo }}
              bg={"#FFFFFF"}
              mt={-45}
              alignSelf="center"
              position={"absolute"}
              
          />
       
          {/* Text judul pekerjaan */}
          <Text bold fontSize="lg" textAlign="center" color="white" mt={10}>
            {job.jobTitle}
          </Text>

          {/* HStack untuk menyusun perusahaan, lokasi, dan tanggal */}
          <HStack space={2} mt={1} justifyContent="center" flexWrap="wrap">
            <Text color="white" flexShrink={1}>
              {job.companyName}
            </Text>

            {/* Ganti karakter tanda titik dengan gambar */}
            <Image
              source={require("../assets/Icons/dots.png")}
              alt="Dot Image"
              size={1}
              alignSelf="center"
            />

            <Text color="white" flexShrink={1}>
              {job.location}
            </Text>

            {/* Ganti karakter tanda titik dengan gambar */}
            <Image
              source={require("../assets/Icons/dots.png")}
              alt="Dot Image"
              size={1}
              alignSelf="center"
            />

            <Text color="white" flexShrink={1}>
              {job.postDate}
            </Text>
          </HStack>
        </Box>

        {/* Box untuk deskripsi pekerjaan dan persyaratan */}
        <Box px={5} py={3} mt={4}>
          {/* Text judul dan deskripsi pekerjaan */}
          <Text bold fontSize="lg">
            Job Description
          </Text>
          <Text mt="2" textAlign="justify">
            {job.description}
          </Text>

          {/* Text judul dan persyaratan */}
          <Text bold fontSize="lg" mt={3}>
            Requirements
          </Text>

          {/* Box untuk menyusun persyaratan */}
          <Box>
            {/* Ganti bagian ini menjadi unordered list */}
            <Text mt="2">
              {job.requirements.map((req, index) => (
                <Text key={index}>
                  {"\u2022"} {req}
                  {"\n"}
                </Text>
              ))}
            </Text>
          </Box>
        </Box>
      </ScrollView>
      <Button
        mt={4}
        mx={20}
        mb={5}
        rounded={10}
        colorScheme="danger"
        size="md"
        onPress={() => navigation.navigate("HomeCompany")}
      >
        APPLAY NOW
      </Button>

      {/* Komponen TabsNavigation tetap di bagian bawah */}
      <TabsNavigation />
    </View>
  );
};

export default JobDetail;
