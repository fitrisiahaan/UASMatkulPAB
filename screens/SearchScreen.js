import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Heading, Container, Icon } from 'native-base';
import JobsCard from '../components/JobsCard';
import SearchBar from '../components/SearchBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import TabsNavigation from '../components/TabsNavigation';

const SearchScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const existingJobs = await AsyncStorage.getItem('jobs');
        const storedJobs = existingJobs ? JSON.parse(existingJobs) : [];
        setJobs(storedJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddJob = () => {
    navigation.navigate('AddJob');
  };

  return (
    <View style={{ flex: 1 }}>
      <Container paddingTop={60}>
        <Heading px={30}>Let's</Heading>
        <Heading px={30}>Find Your Perfect Jobs</Heading>
      </Container>
      <SearchBar navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        {jobs.slice().reverse().map((job) => (
          <JobsCard key={job.id} job={job} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
        <Icon as={MaterialIcons} name="add" size="sm" color="white" />
      </TouchableOpacity>
      <TabsNavigation />
    </View>
  );
};

const styles = {
  addButton: {
    position: 'absolute',
    bottom: 20 + 60,
    right: 20,
    backgroundColor: '#FD5151',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
};

export default SearchScreen;
