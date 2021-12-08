import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { RootStackParamList } from "../navigation/SearchNavigation";

const DetailLocationScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "DetailLocationScreen">) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Name: {route.params.name}</Text>
      <Text>Type: {route.params.type}</Text>
      <Text>Dimension: {route.params.dimension}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default DetailLocationScreen;
