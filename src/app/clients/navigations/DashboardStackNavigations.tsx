import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientsRootStackParameterList } from "./types";
import SearchScreen from "../screens/Home/SearchScreen";
import ResultScreen from "../screens/Home/ResultScreen";
import SeeAllResult from "../screens/Home/SeeAllResult";
import ProDetails from "../screens/Home/ProDetails";
import BookService from "../screens/Home/BookService";
// import BottomTabs from "@/app/artisans/navigations/BottomNavigations.tsx";

const Stack = createNativeStackNavigator<ClientsRootStackParameterList>();

export default function DashboardStackNavigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SearchScreen">
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
      <Stack.Screen name="SeeAllResult" component={SeeAllResult} />
      <Stack.Screen name="ProDetails" component={ProDetails} />
      <Stack.Screen name="BookService" component={BookService} />
    </Stack.Navigator>
  );
}
