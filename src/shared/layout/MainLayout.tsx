import { BackgroundColorProps } from "@shopify/restyle";
import React, { ReactNode } from "react";
import { ActivityIndicator, Platform, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { height, Theme } from "../theme";
import { PaletteType } from "../theme/palette";
import { IconProps } from "@/assets/IconVector";
import { Box } from "../components/Box";
import { BaseButton, BaseButtonProps } from "../components/Buttons/BaseButton";
import { Text, TextProps } from "../components/Typography";
import { SvgIcon } from "@/assets/SvgIcon";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "../components/TouchableOpacity";
import RfValue from "@/helpers/RfValue";
import Loader from "../components/Loading/loading";

interface Style {
  imageName?: number;
  children: ReactNode;
  moduleBackgorund?: PaletteType;
  backgroundColor?: BackgroundColorProps<Theme>["backgroundColor"];
  overlayIconName?: IconProps["name"];
  transparentInner?: boolean;
  bgColorInner?: PaletteType;
  extended?: boolean;
  extensionSize?: "sm" | "md";
  hasBottomButton?: boolean;
  bottomButtonPress?: () => void;
  backButtonPress?: () => void;
  bottomButtonText?: string;
  bottomButtonProps?: BaseButtonProps;
  bottomButtonTextProps?: TextProps;
  HeaderTitle: String;
  hideBackButton?: boolean;
  activityLoading?: boolean;
  loadingText?: string;
}
const MainLayout = ({
  children,
  HeaderTitle,
  hideBackButton = false,
  backgroundColor = "white",
  //   overlayIconName = "landingBackground",
  extended = false,
  bgColorInner = "white",
  transparentInner = false,
  hasBottomButton = false,
  bottomButtonText = "CONTINUE",
  bottomButtonProps,
  bottomButtonTextProps,
  activityLoading = false,
  loadingText,
  bottomButtonPress = () => {},
  backButtonPress,
}: Style) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Box backgroundColor={backgroundColor} flex={1}>
      <Box
        flex={1}
        height={height / 2}
        left={0}
        position="absolute"
        right={0}
        top={0}>
        {/* <IconVector height="105%" name={overlayIconName} width="100%" /> */}
      </Box>
      <Box flex={1}>
        <Box height={insets.top} />
        <Box
          backgroundColor="transparent"
          height={Platform.OS === "android" ? insets.top + 12 : 5}>
          <StatusBar
            animated
            backgroundColor="transparent"
            barStyle="light-content"
            translucent
          />
        </Box>
        <Box
          paddingVertical={"sm"}
          paddingHorizontal={"lg"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          {!hideBackButton && (
            <TouchableOpacity
              onPress={() => {
                if (backButtonPress) {
                  return backButtonPress();
                }

                return navigation.goBack();
              }}
              flexDirection={"row"}
              alignItems={"center"}>
              <SvgIcon name="chevronLeft" size="mm" color="black" />
              <Text variant={"regular14"}>Back</Text>
            </TouchableOpacity>
          )}
          <Text variant={"semiBold14"} color={"black"}>
            {HeaderTitle.toUpperCase()}
          </Text>

          <TouchableOpacity
            position={"relative"}
            backgroundColor={"blue200"}
            borderRadius={"xl"}
            padding={"sm"}>
            <SvgIcon name="bell" color="primary" size="lg" />
            <Box
              right={0}
              position={"absolute"}
              backgroundColor={"red800"}
              borderRadius={"xl"}
              padding={"xs"}
              height={RfValue(24)}
              width={RfValue(24)}
              justifyContent={"center"}
              alignItems={"center"}>
              <Text color={"white"} variant={"medium12"}>
                2
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>

        <Box flex={1}>
          <Box
            backgroundColor={transparentInner ? "transparent" : bgColorInner}
            borderTopLeftRadius={extended ? "none" : "md"}
            borderTopRightRadius={extended ? "none" : "md"}
            flex={1}
            position="relative"
            paddingHorizontal={"md"}
            paddingVertical={"md"}>
            {children}
            {hasBottomButton && (
              <Box
                backgroundColor={transparentInner ? "transparent" : "white"}
                bottom={0}
                left={0}
                pb="sm"
                position="absolute"
                pt="xs"
                px="md"
                right={0}>
                <BaseButton
                  justifyContent="center"
                  onPress={bottomButtonPress}
                  size="md"
                  {...bottomButtonProps}>
                  {bottomButtonProps?.isLoading ? (
                    <ActivityIndicator color="white" size="small" />
                  ) : (
                    <Text
                      color="white"
                      variant="medium14"
                      {...bottomButtonTextProps}>
                      {bottomButtonText}
                    </Text>
                  )}
                </BaseButton>
                <Box height={insets.bottom} />
              </Box>
            )}
          </Box>
        </Box>
        {activityLoading && (
          <Loader text={loadingText} visible={activityLoading} />
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;
