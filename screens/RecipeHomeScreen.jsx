import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RecipeHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Recipe Home Screen</Text>
    </View>
  );
};

export const HomeTab = () => ({
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="food-croissant" size={30} color="black" />
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

export default RecipeHomeScreen;
