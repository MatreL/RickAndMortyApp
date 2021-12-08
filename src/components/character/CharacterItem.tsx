import React, { FC } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import {ICharacter} from "../../interfaces/ICharacter";

const CharaterItem : FC <ICharacter> = ({image, name }) => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
            <Image style={styles.image} source={{uri: `${image}`}}  />
            <View>
              <Text style={styles.text}>{name}</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: "center"},
  column:{flex: 1, flexDirection: "column", justifyContent:"flex-start"},
  row:{flex: 1, flexDirection: "row", margin: 10},
  text:{fontSize: 18},
  image: {width: 80, height: 80, marginRight: 10}
});


export default CharaterItem
