import { logo } from "@/assets/pngImagePack";
import { Box } from "@/shared/components/Box";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { Animated, Dimensions, StatusBar } from "react-native";
// import { Box } from "@/shared/components/Layout";

const { width, height } = Dimensions.get("window");

const AnimatedBox = () => {
  const posX = useRef(new Animated.Value(width / 2 - 44)).current;
  const posY = useRef(new Animated.Value(height / 2 - 44)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const scaleFunction = useCallback(() => {
    Animated.timing(scale, {
      toValue: 0.6,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const posYFunction = useCallback(() => {
    Animated.timing(posY, {
      toValue: (StatusBar.currentHeight ?? 10) + 35,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [posY]);

  const posXFunction = useCallback(() => {
    Animated.timing(posX, {
      toValue: width - 64,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [posX]);

  useFocusEffect(
    useCallback(() => {
      posYFunction();
      posXFunction();
      scaleFunction();
    }, [posXFunction, posYFunction, scaleFunction]),
  );
  return (
    <Box left={0} position="absolute">
      <Animated.View>
        <Animated.Image
          source={logo}
          style={{
            transform: [{ translateX: posX }, { translateY: posY }, { scale }],
            width: 62,
            height: 62,
            objectFit: "contain",
          }}
        />
      </Animated.View>
    </Box>
  );
};

export default AnimatedBox;
