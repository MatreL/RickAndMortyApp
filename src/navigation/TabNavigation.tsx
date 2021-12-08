import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import {FontAwesome5} from "@expo/vector-icons"
import CharacterNavigation from './CharacterNavigation';
import { LocationNavigator } from './CharacterNavigation';

export type RootTabParamList = {
    CharacterList: undefined;
    Locations: undefined;
  };
export default function TabNavigation() {
    const Tab = createBottomTabNavigator<RootTabParamList>();
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarActiveBackgroundColor: "#f4511e",
            tabBarInactiveBackgroundColor: "gray",
            tabBarInactiveTintColor: "white",
            headerStyle:{ backgroundColor: "#f4511e"},
            headerTintColor: "white",
            headerShown: false
          }}>
            <Tab.Screen 
            name="CharacterList" 
            component={CharacterNavigation} 
            options={{tabBarIcon: ({color, size}) => 
            <FontAwesome5 name="list" size={size} color={color} />}}/>
            <Tab.Screen 
            name="Locations" 
            component={LocationNavigator} 
            options={{tabBarIcon: ({color, size}) => 
            <FontAwesome5 name="list" size={size} color={color} />}}/>
          </Tab.Navigator>
          
    )
}
