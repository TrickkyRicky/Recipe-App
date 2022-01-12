import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeDetails from "../screens/RecipeDetailsScreen";
import BottomTabNav from "./BottomTabNav";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Back"
        component={BottomTabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={RecipeDetails} />
    </Stack.Navigator>
  );
}
// hi

export default MyStack;
