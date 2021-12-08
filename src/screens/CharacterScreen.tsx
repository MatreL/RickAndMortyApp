import React from "react";
import { RootStackParamList } from "../navigation/SearchNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RickAndMortyProvider } from "../context/RickAndMortyContext";
import CharaterList from "../components/character/CharacterList";

const CharacterScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "CharacterScreen">) => {
  return (
    <RickAndMortyProvider>
      <CharaterList />
    </RickAndMortyProvider>
  );
};

export default CharacterScreen;
