import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomNavigations.tsx";
import { ArtisanRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<ArtisanRootStackParameterList>();

export default function ArtisanStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}
