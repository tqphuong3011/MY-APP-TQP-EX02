import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '@/app/(tabs)/auth/LoginScreen';
import OnbroadingScreen from '@/app/(tabs)/auth/OnBoarding';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  //Auth goi Login
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator; 