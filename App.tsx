import React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './src/components/CustomDrawer';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from "./src/screens/ResultScreen";
import TestScreen from "./src/screens/TestScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{ 
        headerShown: false, 
        drawerActiveBackgroundColor: '#DB7F8E',
        drawerActiveTintColor: '#F7EBFD',
        drawerInactiveBackgroundColor: '#343a40',
        drawerInactiveTintColor: '#F7EBFD',
        drawerLabelStyle: {
          marginLeft: 20,
          fontSize: 20,
        },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Results" component={ResultScreen} />
        <Drawer.Screen name="Test" component={TestScreen} />
      </Drawer.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Root" component={Root}/>
        <Stack.Screen name="Results" component={ResultScreen} />
        <Drawer.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
