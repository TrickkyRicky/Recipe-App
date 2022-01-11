import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeDetails from "../screens/RecipeDetailsScreen";
import BottomTabNav from "./BottomTabNav";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipe" component={BottomTabNav} />
    </Stack.Navigator>
  );
}
// I think I need to go in 5

export default MyStack;
