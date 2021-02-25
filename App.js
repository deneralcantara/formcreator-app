import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './src/pages/FormScreen'
import IndexScreen from './src/pages/IndexScreen'
import AnswerForm from './src/pages/AnswerForm'

import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {

  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();

  function FormStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Inicio" component={IndexScreen} />
        <HomeStack.Screen name="AnswerForm" component={AnswerForm} />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if(route.name === "Página Inicial"){
              iconName = "home-outline";
            }
            else if(route.name === "Questionário"){
              iconName = "document-text-outline";
            }

            return <Ionicons name={iconName} size={size} color ={color} />;
          }
        })}>
        <Tab.Screen name="Página Inicial" component={FormStackScreen} />
        <Tab.Screen name="Questionário" component={FormScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}