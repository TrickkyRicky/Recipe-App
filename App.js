import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./Navigator/StackTabNav";

const App = () => (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
);

export default App;
