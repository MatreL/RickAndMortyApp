import React from "react";
import { RootStackParamList } from "../navigation/SearchNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RickAndMortyProvider } from "../context/RickAndMortyContext";
import LocationList from "../components/location/LocationList";

const CharacterScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "CharacterScreen">) => {
  return (
    <RickAndMortyProvider>
      <LocationList />
    </RickAndMortyProvider>
  );
};

export default CharacterScreen;
