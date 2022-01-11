import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipeDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Recipe Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecipeDetailsScreen;
