// AddJobScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import { FormControl, Input, Button, Center, Text, ScrollView } from 'native-base';
import CheckboxFilter from '../components/CheckboxFilter';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyTextInput = ({ label, placeholder, value, onChangeText }) => {
  return (
    <FormControl isRequired>
      <FormControl.Label>{label}</FormControl.Label>
      <Input p={2} placeholder={placeholder} onChangeText={onChangeText} w={390} />
    </FormControl>
  );
};

const AddJobScreen = ({ navigation }) => {
  const [jobPosition, setJobPosition] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [requirements, setRequirements] = useState('');
  const [description, setDescription] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);

  const handlePostJob = async () => {
    const newJob = {
      id: Math.random().toString(36).substr(2, 9),
      jobPosition,
      jobLocation,
      experience,
      requirements,
      description,
      jobType: selectedJobTypes,
    };

    try {
      const existingJobs = await AsyncStorage.getItem('jobs');
      const jobs = existingJobs ? JSON.parse(existingJobs) : [];
      jobs.push(newJob);
      await AsyncStorage.setItem('jobs', JSON.stringify(jobs));
      navigation.navigate('Search');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <View>
        <ScrollView>
      <Center paddingTop={10} paddingLeft={5}>
        <MyTextInput
          label="Job Position"
          placeholder="Enter job position"
          value={jobPosition}
          onChangeText={setJobPosition}
        />
      </Center>
      <CheckboxFilter onFilterChange={setSelectedJobTypes} />
      <Center paddingLeft={5}>
        <MyTextInput
          label="Job Location"
          placeholder="Enter job location"
          value={jobLocation}
          onChangeText={setJobLocation}
        />
        <MyTextInput
          label="Experience"
          placeholder="Enter required experience"
          value={experience}
          onChangeText={setExperience}
        />
        <MyTextInput
          label="Requirements"
          placeholder="Enter job requirements"
          value={requirements}
          onChangeText={setRequirements}
        />
        <MyTextInput
          label="Description"
          placeholder="Enter job description"
          value={description}
          onChangeText={setDescription}
        />

        <Button
          mt={8}
          mx={8}
          rounded={15}
          backgroundColor="#B7FEC2"
          size="md"
          onPress={handlePostJob}
        >
          <Text fontWeight="bold">Post Job</Text>
        </Button>
      </Center>
      </ScrollView>
    </View>
  );
};

export default AddJobScreen;
