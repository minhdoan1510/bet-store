import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeTab/Home.screen";
import React from "react";
import { HomeTabParamList } from "../../types";

const Stack = createStackNavigator<HomeTabParamList>();

export function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions =  {{headerShown: true}} initialRouteName = "Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Home Screen' }}
      />
    </Stack.Navigator>
  );
}
