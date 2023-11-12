import React from 'react';
import { TouchableOpacity} from 'react-native';
import { Container, View, Text, Button, Image } from 'native-base';
import TabsNavigation from '../components/TabsNavigation';

const AfterAddJobScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Container paddingTop={45}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              source={require('../assets/Icons/back.png')}
              style={{ width: 19, height: 15, marginLeft: 20 }}
              />
            </TouchableOpacity>
        </Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../assets/Icons/afteraddjob.png')}
          style={{
            marginBottom: 50,
          }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginBottom: 5 }}>
          Congratulations!
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 17, textAlign: 'center' }}>
          Your job has been added
        </Text>
      </View>
      <View style={{ marginBottom: 30}}>
      <Button
        mt={4}
        mx={20}
        rounded={10}
        colorScheme="danger"
        size="md"
        onPress={() => navigation.navigate('Search')}
      >
        MAKE ANOTHER JOB
      </Button>

      <Button
        mt={4}
        mx={20}
        rounded={10}
        colorScheme="danger"
        size="md"
        onPress={() => navigation.navigate('Search')}
      >
       BACK TO HOME
      </Button>
      </View>
      <TabsNavigation />
    </View>
  );
};
 
export default AfterAddJobScreen;
