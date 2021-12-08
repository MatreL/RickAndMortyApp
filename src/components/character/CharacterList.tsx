import React, { useContext, useEffect, useState } from "react";
import { RickAndMortyContext } from "../../context/RickAndMortyContext";
import { ProjectType } from "../../types/ProjectType";
import { ICharacter } from "../../interfaces/ICharacter";
import CharaterItem from "./CharacterItem";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { rickAndMortyServices } from "../../service/RickAndMortyService";

const CharaterList = () => {
  const { characters } = useContext(
    RickAndMortyContext
  ) as ProjectType;
  const navigation = useNavigation();

  const [characterList, setCharacterList] = useState<ICharacter[]>();

  const [query, setQuery] = useState("");

  const handleSearch = (text: string) => {
    const filteredList = characters.filter((character) =>
      character.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
    setQuery(text);
    setCharacterList(filteredList);
  };

  useEffect(() => {
    setCharacterList(characters);
  }, [characters]);

  return (
    <View style={styles.list}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={query}
        onChangeText={(queryText) => handleSearch(queryText)}
        placeholder="Search on name"
        style={{ backgroundColor: "#fff", paddingHorizontal: 20, height: 50 }}
      />

      {characterList && (
        <FlatList
          data={characterList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DetailCharacterScreen", {
                    title: item.name,
                    name: item.name,
                    status: item.status,
                    species: item.species,
                    image: item.image,
                    gender: item.gender,
                  })
                }
              >
                <CharaterItem name={item.name} image={item.image} />
              </TouchableOpacity>
            </View>
          )}
          onEndReachedThreshold={0}
          onEndReached={() => rickAndMortyServices.getAll(2)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: { flex: 1, width: "100%", padding: 10, marginTop: 50 },
});

export default CharaterList;
