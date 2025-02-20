import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ShoppingListsScreen from "../screens/ShoppingListsScreen";
import ShoppingListDetailsScreen from "../screens/ShoppingListDetailsScreen";

const Stack = createStackNavigator();

const ShoppingListNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ShoppingLists" component={ShoppingListsScreen} />
        <Stack.Screen name="ShoppingListDetails" component={ShoppingListDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShoppingListNavigator;
