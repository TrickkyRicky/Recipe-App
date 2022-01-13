import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
// NICK

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
  picBanner: {
    width: 500,
    height: 500,
  },
});

export default RecipeDetailsScreen;
