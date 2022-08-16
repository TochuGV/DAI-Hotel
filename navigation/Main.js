import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Form from '../screens/Form';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen
          name="Form"
          component={Form}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main