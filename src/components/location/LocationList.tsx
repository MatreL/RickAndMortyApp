import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ILocations } from "../../interfaces/ILocations";
import LocationItem from "./LocationItem";
import { RickAndMortyContextType } from "../../types/RickAndMortyContextType";
import { RickAndMortyContext } from "../../context/RickAndMortyContext";

const LocationList = () => {
  const { locations } = useContext(
    RickAndMortyContext
  ) as RickAndMortyContextType;

  const navigation = useNavigation();

  const createLocationList = () => {
    return locations.map((location: ILocations, key: number) => {
      return (
        <View key={key}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailLocationScreen", {
                id: `${location.id}`,
                name: `${location.name}`,
                type: `${location.type}`,
                dimension: `${location.dimension}`,
              })
            }
          >
            <LocationItem
              name={location.name}
              type={location.type}
              dimension={location.dimension}
            />
          </TouchableOpacity>
        </View>
      );
    });
  };

  return <ScrollView style={styles.list}>{createLocationList()}</ScrollView>;
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default LocationList;
