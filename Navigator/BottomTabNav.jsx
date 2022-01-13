import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipeHomeScreen, { HomeTab } from "../screens/RecipeHomeScreen";
import FavoritesScreen, { FavoritesTab } from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#02AFF3" },
        tabBarActiveTintColor: "#D827FA",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 14, color: "white" },
        headerStyle: { backgroundColor: "#02AFF3" },
        headerTitleStyle: { color: "white" },
      }}
    >
      <Tab.Screen name="Home" options={HomeTab} component={RecipeHomeScreen} />
      <Tab.Screen
        name="Favorites"
        options={FavoritesTab}
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
// yeah
