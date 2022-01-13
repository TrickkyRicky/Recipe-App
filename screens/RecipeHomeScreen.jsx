import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
// MARK

const fakeData = [
  {
    id: 1,
    title: "Tomato Soup with Cheese and Bread",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    id: 2,
    title: "Bacon Pancakes with Eggs and Hashbrowns",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    id: 3,
    title: "Steak with French Fries",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    id: 4,
    title: "Food4",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    id: 5,
    title: "Food5",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    id: 6,
    title: "Food6",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    id: 7,
    title: "Food7",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
  {
    id: 8,
    title: "Food8",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
    description:
      "food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.",
  },
];

const alertMe = () => {
  Alert.alert("Alert Title", "My Alert Msg");
};
const RecipeHomeScreen = () => {
  const navigate = useNavigation();
  return (
    <FlatList
      data={fakeData} // data from fakeData
      style={{ backgroundColor: "rgba(2,175,243, .2)" }}
      columnWrapperStyle={{ justifyContent: "space-evenly" }}
      numColumns={2} // set columns to 2, so now items appear side by side
      keyExtractor={(item) => item.id} // key taken from the id of each individual object in fakeData
      renderItem={(items) => {
        return (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigate.navigate("Details", items.item)} // brings you to the items RecipeDetails page
            onLongPress={alertMe}
          >
            {/* pressable for the heart icon, for favoriting */}
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1, // changes the opacity of the image to let user know it's been clicked
                  position: "absolute", // keeps the image contained inside the container
                  zIndex: 2, // to bring the image to the front
                  top: 15, // changes the top position of the image, higher the number the lower the image
                  right: 10, // changes the right position, the higher the number the more left the image
                  width: 35,
                  height: 35,
                  borderRadius: 20,
                  backgroundColor: "rgba(0, 0, 0, .7)",
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onPress={() => console.log(`I LIKED ID: ${items.item.id}`)}
            >
              <AntDesign name="heart" size={19} color="white" />
            </Pressable>
            <Image style={styles.pic} source={{ uri: items.item.img }} />
            {/*display the items image */}
            <Text style={styles.foodTitle} numberOfLines={2}>
              {items.item.title}
            </Text>
            {/*text to show the items title */}
          </TouchableOpacity>
        );
      }}
    />
  );
};

export const HomeTab = () => ({
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="food-croissant" size={30} color={color} />
  ),
});

const styles = StyleSheet.create({
  itemContainer: {
    width: "47%",
    paddingHorizontal: 7,
    paddingTop: 7,
    marginVertical: 5,
    backgroundColor: "#fff",
    position: "relative",
    elevation: 8,
    borderRadius: 10,
  },
  foodTitle: {
    fontSize: 16,
    textAlign: "left",
    paddingVertical: 10,
    fontWeight: "600",
  },
  pic: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  heartIcon: {
    position: "absolute",
  },
});

export default RecipeHomeScreen;
