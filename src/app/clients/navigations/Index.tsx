import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientsRootStackParameterList } from "./types";
import BottomTabs from "./BottomNavigations";
import DashboardStackNavigations from "./DashboardStackNavigations";

const Stack = createNativeStackNavigator<ClientsRootStackParameterList>();

export default function ClientStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen
        name="DashboardStackNavigations"
        component={DashboardStackNavigations}
      />
    </Stack.Navigator>
  );
}
