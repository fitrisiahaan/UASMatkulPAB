// import { View } from 'react-native';
// import { Heading, Container } from 'native-base';
// import TabsNavigation from '../components/TabsNavigation';
// import JobsCard from '../components/JobsCard';
// import SearchBar from '../components/SearchBar';

// import { ScrollView } from 'react-native';

// const SearchScreen = ({ navigation }) => {
//     return (
//         <View style={{ flex: 1 }}>
//             <Container paddingTop={60}>
//                 <Heading px={30}>Let's</Heading>
//                 <Heading px={30}>Find Your Perfect Jobs</Heading>
//             </Container>
//             <SearchBar navigation={navigation} />
//             <ScrollView style={{ flex: 1 }} >
//                 <JobsCard />
//                 <JobsCard />
//                 <JobsCard />
//                 <JobsCard />
//                 <JobsCard />
//                 <JobsCard />
//                 <JobsCard />
//             </ScrollView>
//             <TabsNavigation />
//         </View>
//     );
// };

// export default SearchScreen;

// JobListScreen.js

import React from 'react';
import { View, ScrollView } from 'react-native';
import { Heading, Container } from 'native-base';
import TabsNavigation from '../components/TabsNavigation';
import JobsCard from '../components/JobsCard';
import SearchBar from '../components/SearchBar';
import jobData from "../jobData" // Sesuaikan dengan path yang benar

const JobListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Container paddingTop={60}>
        <Heading px={30}>Let's</Heading>
        <Heading px={30}>Find Your Perfect Jobs</Heading>
      </Container>
      <SearchBar navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        {jobData.map((job) => (
          <JobsCard key={job.id} job={job} navigation={navigation} />
        ))}
      </ScrollView>
      <TabsNavigation />
    </View>
  );
};

export default JobListScreen;
