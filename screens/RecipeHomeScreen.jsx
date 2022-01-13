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
import { MaterialCommunityIcons } from "@expo/vector-icons";
// MARK

const fakeData = [
  {
    id: 1,
    title: "Food1",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    id: 2,
    title: "Food2",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    id: 3,
    title: "Food3",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    id: 4,
    title: "Food4",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    id: 5,
    title: "Food5",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    id: 6,
    title: "Food6",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    id: 7,
    title: "Food7",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
  },
  {
    id: 8,
    title: "Food8",
    img: "https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg",
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
      numColumns={2} // set columns to 2, so now items appear side by side
      keyExtractor={(item) => item.id} // key taken from the id of each individual object in fakeData
      renderItem={(items) => {
        return (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigate.navigate("Details", items.item)} // brings you to the items RecipeDetails page
            onLongPress={alertMe}
          >
            <Image style={styles.pic} source={{ uri: items.item.img }} />
            {/*display the items image */}
            <Text style={styles.foodTitle}>{items.item.title}</Text>
            {/*text to show the items title */}
          </TouchableOpacity>
        );
      }}
    />
  );
};

export const HomeTab = () => ({
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name="food-croissant" size={30} color="black" />
  ),
});

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#D3D3D3",
  },
  foodTitle: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
  },
  detailsText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pic: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  favorite: {
    width: "50%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
    backgroundColor: "#fff",
  },
});

export default RecipeHomeScreen;
