import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,TouchableWithoutFeedback, TouchableOpacity, FlatList, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedScreen from './components/feed';
import ProfileScreen from './components/profile';  


const Stack = createNativeStackNavigator();


export default function App() {
     return(
    <NavigationContainer>
   <Stack.Navigator>
        <Stack.Screen name="Feed"
        component={FeedScreen}
        options={{
      headerShown: false,}}/>
        <Stack.Screen name="Profile"
        component={ProfileScreen}
        options={{
      headerShown: false,}}/>
    </Stack.Navigator>
    </NavigationContainer>    
     
    );
};











