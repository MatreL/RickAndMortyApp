import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { RootStackParamList } from "../navigation/SearchNavigation";

const DetailCharacterScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "DetailCharacterScreen">) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{ uri: `${route.params.image}` }}
      />

      <Text>Name: {route.params.name}</Text>
      <Text>Art: {route.params.species}</Text>
      <Text>Gender: {route.params.gender}</Text>
      <Text>Status: {route.params.status}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageStyle: { width: 200, height: 200 },
});

export default DetailCharacterScreen;
