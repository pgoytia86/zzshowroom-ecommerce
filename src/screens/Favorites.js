import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>ESTAMOS EN FAVORITOS</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
