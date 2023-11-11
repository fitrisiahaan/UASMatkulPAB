// TabsNavigation.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const TabsNavigation = () => {
  const navigation = useNavigation();

  const navigateToInformation = () => {
    navigation.navigate('Information');
  };

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={navigateToInformation}>
        <Image source={require('../assets/Icons/Information.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={navigateToSearch}>
        <Image source={require('../assets/Icons/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={navigateToProfile}>
        <Image source={require('../assets/Icons/profile.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 60,
  },
  tab: {
    alignItems: 'center',
  },
});

export default TabsNavigation;
