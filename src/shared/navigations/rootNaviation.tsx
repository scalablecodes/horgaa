import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IntroScreen } from "../screens/introScreens";
import ArtisanStack from "@/app/artisans/navigations/Index";
import ClientStack from "@/app/clients/navigations/Index";
import ContinueScreen from "../screens/ContinueScreen/Index";
import { RootStacksParameterList } from "./types";

const Stack = createNativeStackNavigator<RootStacksParameterList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_left",
        animationDuration: 50,
        //   contentStyle: { backgroundColor: "#0033AA" },
        gestureEnabled: false,
        animationTypeForReplace: "push",
      }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="ContinueScreen" component={ContinueScreen} />
      <Stack.Screen name="ArtisanStack" component={ArtisanStack} />
      <Stack.Screen name="ClientStack" component={ClientStack} />
    </Stack.Navigator>
  );
}
