import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ILocations } from "../../interfaces/ILocations";

const LocationItem: FC<ILocations> = ({ name, type, dimension }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.text}>Navn: {name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 50, flex: 1, justifyContent: "center" },
  column: { flex: 1, flexDirection: "column", justifyContent: "flex-start" },
  row: { flex: 1, flexDirection: "row", margin: 10 },
  text: { fontSize: 18 },
  image: { width: 80, height: 80, marginRight: 10 },
});

export default LocationItem;
