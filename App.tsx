/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar } from "react-native";
import RootNavigation from "./src/shared/navigations/rootNaviation";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/shared/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheetProvider from "./src/contexts/BottomSheet/provider";

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme.lightTheme}>
      <StatusBar />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </BottomSheetProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
