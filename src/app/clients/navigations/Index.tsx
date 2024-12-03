import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ClientsRootStackParameterList } from "./types";
import BottomTabs from "./BottomNavigations";
import SearchScreen from "../screens/Home/SearchScreen";
// import BottomTabs from "@/app/artisans/navigations/BottomNavigations.tsx";

const Stack = createNativeStackNavigator<ClientsRootStackParameterList>();

export default function ClientStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}
