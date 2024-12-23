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

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  // const { theme: appTheme, referer } = useSelector(
  //   (state: RootState) => state.app,
  // );
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <ThemeProvider
      theme={theme.lightTheme}
      // <SafeAreaView>
    >
      <StatusBar
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // backgroundColor={backgroundStyle.backgroundColor}
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
      {/* </SafeAreaView> */}
    </ThemeProvider>
  );
}

export default App;
