import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Favorites Screen</Text>
    </View>
  );
};

export const FavoritesTab = () => ({
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="cupcake" size={30} color="#e75480" />
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
