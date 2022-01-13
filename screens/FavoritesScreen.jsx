import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// SOOMI

const fakeData = [
  {
    title: "Food",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    title: "Food",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    title: "Food",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    title: "Food",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
];

const FavoritesScreen = () => {
  return <View style={styles.container}></View>;
};

export const FavoritesTab = () => ({
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="cupcake" size={30} color={color} />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
