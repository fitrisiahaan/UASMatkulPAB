import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import SplashScreen from './screens/SplashScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import GetStartedScreen from './screens/GetStartedScreen';
import SearchScreen from './screens/SearchScreen';
import FilterScreen from './screens/FilterScreen';
import CompanyProfileScreen from './screens/CompanyProfileScreen';
import SignInCompanyProfileScreen from './screens/SignInCompanyProfileScreen';
import NotificationScreen from './screens/NotificationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GetStarted"
            component={GetStartedScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Filter"
            component={FilterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CompanyProfile"
            component={CompanyProfileScreen}
            options={{ headerShown: true, headerTitle: "Company Profile" }}
          />
          <Stack.Screen
            name="SignInCompanyProfile"
            component={SignInCompanyProfileScreen}
            options={{ headerShown: true, headerTitle: "Sign In Company Profile" }}
          />
          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={{ headerShown: true, headerTitle: "Notification" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
