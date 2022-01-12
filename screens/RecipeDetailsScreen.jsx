import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
// NICK

const fakeData = [
  {
    title: "Food",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    title: "Food",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    title: "Food",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    title: "Food",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
];

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
