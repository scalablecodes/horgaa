import { logo } from "@/assets/pngImagePack";
import RfValue from "@/helpers/RfValue";
import { Box } from "@/shared/components/Box";
import { BaseButton } from "@/shared/components/Buttons/BaseButton";
import { Image } from "@/shared/components/Image";
import { Text } from "@/shared/components/Typography";
import { RootNavigationProps } from "@/shared/navigations/types";
import { horizontalScale, verticalScale } from "@/shared/theme";

import React, { FC } from "react";
import { StatusBar, TouchableOpacity } from "react-native";

const ContinueScreen: FC<RootNavigationProps<"ContinueScreen">> = ({
  navigation,
}) => {
  return (
    <Box backgroundColor={"white"} flex={1} justifyContent={"flex-end"}>
      <StatusBar
        animated
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Box flex={0.8} paddingHorizontal={"lg"}>
        <Box flexDirection={"row"} alignItems={"center"}>
          <Image
            source={logo}
            height={RfValue(30)}
            width={RfValue(30)}
            resizeMode="contain"
          />
          <Text variant={"semiBold24"} marginLeft={"sm"} color="primary">
            Horgaa
          </Text>
        </Box>
        <Box paddingTop={"xl"}>
          <Text variant={"medium22"}>Continue with Horgaa</Text>
          <Text marginTop={"md"} variant={"regular16"}>
            Have a Taste to get premium service from Horgaa at a low rate and
            enjoy exclusive offers as a Horgaa
          </Text>
        </Box>
        {/* <Box paddingTop={"xl"}>
          <Text variant={"medium22"}>Sign up</Text>
          <Text marginTop={"md"} variant={"regular16"}>
            Sign up to get premium service from Horgaa at a low rate and enjoy
            exclusive offers as a Horgaa
          </Text>
        </Box> */}

        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <TouchableOpacity onPress={() => navigation.navigate("ClientStack")}>
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"sm"}
              marginTop={"lg"}
              width={horizontalScale(150)}
              backgroundColor={"blue200"}
              height={verticalScale(169)}>
              <Text>Continue as a Client</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ArtisanStack")}>
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"sm"}
              marginTop={"lg"}
              width={horizontalScale(150)}
              backgroundColor={"green200"}
              height={verticalScale(169)}>
              <Text>Continue as an Artisan</Text>
            </Box>
          </TouchableOpacity>
        </Box>

        <Box
          marginTop={"xl"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}>
          <Box width={horizontalScale(140)} borderTopWidth={1} />
          <Text variant={"regular14"}>Or</Text>
          <Box width={horizontalScale(140)} borderTopWidth={1} />
        </Box>

        <Box>
          <BaseButton
            backgroundColor="primary"
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
            paddingHorizontal="none"
            size="md"
            marginTop={"lg"}
            // width={width / 2 - 30}
          >
            <Box alignItems="center" justifyContent="center" width="100%">
              <Text color={"white"} variant="medium12">
                Login
              </Text>
            </Box>
          </BaseButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ContinueScreen;
