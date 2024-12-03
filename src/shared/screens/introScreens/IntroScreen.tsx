import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Animated, Dimensions, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {
  introBackground1,
  introBackground2,
  introBackground3,
  introBackground4,
  introBackground5,
  landingpagebackground,
} from "@/assets/pngImagePack";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";
import AnimatedBox from "./AnimatedBox";
import { BaseButton } from "@/shared/components/Buttons/BaseButton";
import { Box } from "@/shared/components/Box";
import { ImageBackground } from "@/shared/components/ImageBackground";

const allSlides = [
  { id: "oworkf", text: "Showcase your skills and get booked effortlessly." },
  { id: "sowike", text: "Stay connected—find artisans and experts with ease." },
  { id: "apoow2", text: "Advertise your products on our marketplace." },
  { id: "as9w3i", text: "Enjoy 24/7 customer support whenever you need it." },
  { id: "osaooq2", text: "Solve problems quickly with horgaa." },
];

const allSlidesBackgrounds = [
  introBackground1,
  introBackground2,
  introBackground3,
  introBackground4,
  introBackground5,
];

const DURATION = 5000;

export default function IntroScreen() {
  const { t } = useTranslation();
  const { height, width } = Dimensions.get("window");
  const [activeSlide, setActiveSlide] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const slide = allSlides.map(() => useRef(new Animated.Value(0)).current);
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  // const [paused, setPaused] = useState<boolean>(false);

  const slideFunction = useCallback(
    (active: number) =>
      Animated.timing(slide[active], {
        toValue: 60,
        duration:
          Number(JSON.stringify(slide[active])) === 0
            ? DURATION
            : (DURATION / 60) * (60 - Number(JSON.stringify(slide[active]))),
        useNativeDriver: false,
      }),
    [slide],
  );
  // console.log(slide);

  const fadeFunction = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: DURATION / 4,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  const resetFadeFunction = useCallback(() => {
    slide.map((s, index) => {
      if (index > activeSlide - 1) {
        Animated.timing(s, {
          toValue:
            Number(JSON.stringify(s)) === 60 ? 0 : Number(JSON.stringify(s)),
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
      if (index < activeSlide) {
        Animated.timing(s, {
          toValue: 60,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
    });
  }, [activeSlide, slide]);

  useFocusEffect(
    useCallback(() => {
      resetFadeFunction();
      fadeFunction();
      // if (!paused) {
      slideFunction(activeSlide).start(({ finished }) => {
        if (finished) {
          if (activeSlide < allSlides.length - 1) {
            setActiveSlide(activeSlide + 1);
          }
        }
      });
      // }
    }, [resetFadeFunction, fadeFunction, slideFunction, activeSlide]),
  );

  return (
    <ImageBackground
      width={width}
      height={height}
      resizeMethod="auto"
      source={landingpagebackground}>
      <StatusBar
        animated
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <ImageBackground flex={1} source={allSlidesBackgrounds[activeSlide]}>
          <Box height={(StatusBar.currentHeight ?? 10) + 10} />
          <Box flex={1}>
            <Box flex={3} mt="lg" p="md">
              <Box flexDirection="row">
                {allSlides.map((eachSlide, index) => (
                  <Box
                    backgroundColor="transparent"
                    borderRadius="lg"
                    height={4}
                    key={eachSlide.id}
                    mr="sm"
                    width={60}>
                    <Animated.View
                      style={{
                        height: 4,
                        width: slide[index],
                        marginRight: 7,
                        backgroundColor: palette.white,
                        borderRadius: 100,
                      }}
                    />
                  </Box>
                ))}
              </Box>
              <Box p="lg" py="lg">
                <Text color="white" variant="semiBold22">
                  {allSlides[activeSlide].text}
                </Text>
              </Box>
            </Box>
            <Box flex={2}>
              <LinearGradient
                colors={[palette.transparent, palette.black]}
                // start={{x: 0.005, y: 0}}
                style={{ flex: 1 }}>
                <Box flex={1} justifyContent="flex-end">
                  <Box
                    flexDirection="row"
                    justifyContent="space-around"
                    mb="md"
                    mx="sm">
                    <Box>
                      <BaseButton
                        backgroundColor="white"
                        onPress={() => {
                          navigation.navigate("Signup");
                        }}
                        paddingHorizontal="none"
                        size="md"
                        width={Dimensions.get("window").width / 2 - 30}>
                        <Box
                          alignItems="center"
                          justifyContent="center"
                          width="100%">
                          <Text variant="medium12">
                            {t("Sign up").toUpperCase()}
                          </Text>
                        </Box>
                      </BaseButton>
                    </Box>
                    <Box>
                      <BaseButton
                        borderColor={"white"}
                        borderWidth={1}
                        backgroundColor="transparent"
                        onPress={() => {
                          navigation.navigate("ContinueScreen");
                        }}
                        size="md"
                        width={Dimensions.get("window").width / 2 - 30}>
                        <Box width="100%">
                          <Text
                            color={"white"}
                            fontWeight="400"
                            textAlign="center"
                            variant="medium12">
                            {t("Continue").toUpperCase()}
                          </Text>
                        </Box>
                      </BaseButton>
                    </Box>
                  </Box>
                </Box>
              </LinearGradient>
            </Box>
          </Box>
        </ImageBackground>
      </Animated.View>
      <AnimatedBox />
    </ImageBackground>
  );
}
