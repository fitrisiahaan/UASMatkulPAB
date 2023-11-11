import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import SplashScreen from "./screens/SplashScreen.js";
import JobListScreen from "./screens/JobListScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import GetStartedScreen from "./screens/GetStartedScreen";
import SearchScreen from "./screens/JobListScreen.js";
import FilterScreen from "./screens/FilterScreen";
import JobDetailScreen from "./screens/JobDetailScreen.js";
import HomeCompanyScreen from "./screens/HomeCompanyScreen.js";


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
            name="JobList"
            component={JobListScreen}
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
            name="JobDetail"
            component={JobDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeCompany"
            component={HomeCompanyScreen}
            options={{ headerShown: false }}
          />

        
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
