import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterScreen from '../screens/CharacterScreen';
import DetailCharacterScreen from '../screens/DetailCharacterScreen';
import DetailLocationScreen from '../screens/DetailLocationScreen';
import LocationScreen from '../screens/Locations';


export type RootStackParamList = {
  CharacterScreen: undefined;
  DetailCharacterScreen: {id: number, name: string, image: string, species: string, status: string, gender: string };
  LocationScreen: undefined;
  DetailLocationScreen: {
    id: number,
    name: string,
    type: string,
    dimension: string
  };
  }

export default function SearchNavigation() {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator 
        initialRouteName="CharacterScreen" 
        screenOptions={{headerStyle:{ 
            backgroundColor: "#f4511e"}, 
            headerTintColor: "white",}}
            >
        <Stack.Screen 
        name="CharacterScreen" 
        component={CharacterScreen}
        options={{ headerShown:false}}
        />
        <Stack.Screen 
        name="DetailCharacterScreen"
        component={DetailCharacterScreen}
        options={({route}) =>({ title: route.params.name })}
        />
        <Stack.Screen 
        name="LocationScreen" 
        component={LocationScreen}
        options={{ headerShown:false}}
        />
        <Stack.Screen 
        name="DetailLocationScreen"
        component={DetailLocationScreen}
        options={({route}) =>({ title: route.params.name })}
        />
      </Stack.Navigator>
    )
}

export function LocationNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
      <Stack.Navigator 
      initialRouteName="LocationScreen" 
      screenOptions={{headerStyle:{ 
          backgroundColor: "#f4511e"}, 
          headerTintColor: "white",}}
          >
      <Stack.Screen 
      name="LocationScreen" 
      component={LocationScreen}
      options={{ headerShown:false}}
      />
      <Stack.Screen 
      name="DetailLocationScreen"
      component={DetailLocationScreen}
      options={({route}) =>({ title: route.params.name })}
      />
    </Stack.Navigator>
  )
}

