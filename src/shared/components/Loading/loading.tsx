import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
// import * as Animatable from "react-native-animatable";

// import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";

import jsonLoader from "./json/loader.json";
import { height } from "@/shared/theme";
import RfValue from "@/helpers/RfValue";

const styles = StyleSheet.create({
  container: {
    height: height,
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundColor: "#FFF",
    zIndex: 999_999_999_999_999,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: palette.primary,
    fontSize: RfValue(14),
  },
  lottieView: {
    width: RfValue(400),
    height: RfValue(400),
  },
});

const Loading = ({
  active,
  // text = "Processing...",
  showLoading = true,
}: {
  active: boolean;
  text?: string;
  showLoading?: boolean;
}) => {
  return (
    active && (
      <View style={styles.container}>
        {showLoading && (
          <LottieView
            autoPlay
            loop
            resizeMode="cover"
            source={jsonLoader}
            style={styles.lottieView}
          />
        )}
        {/* <Animatable.View
          animation="flash"
          iterationCount="infinite"
          iterationDelay={2000}>
          <Text>{text}</Text>

        </Animatable.View> */}
      </View>
    )
  );
};

export default Loading;
