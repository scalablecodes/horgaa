import { Box } from "@/shared/components/Box";
import { ScrollBox } from "@/shared/components/ScrollBox";
import { Text } from "@/shared/components/Typography";
import React, { FC } from "react";
import { ClientsNavigationProps } from "../../navigations/types";
import { Image } from "@/shared/components/Image";
import { avatar } from "@/assets/pngImagePack";
import { horizontalScale, verticalScale } from "@/shared/theme";
import Tile from "@/shared/components/Tile";
import RfValue from "@/helpers/RfValue";

const MoreScreen: FC<ClientsNavigationProps<"MoreScreen">> = ({
  navigation,
}) => {
  return (
    <ScrollBox padding={"md"} backgroundColor={"white"}>
      <Box justifyContent={"center"} alignItems={"center"}>
        <Image
          borderRadius={"xl"}
          height={verticalScale(120)}
          width={horizontalScale(120)}
          source={avatar}
        />
        <Text marginTop="sm" variant={"semiBold22"}>
          {" "}
          John Simeon
        </Text>
      </Box>
      <Box>
        {/* <Tile
          backgroundColor="white"
          leftIconColor="white"
          leftIconSvg="logout"
          leftIconSvgSize="lg"
          onPress={() => {}}
          tileContainerStyle={{
            paddingVertical: "sm",
            marginHorizontal: "md",
            marginBottom: "md",
            borderRadius: "mmd",
            borderWidth: 1.5,
            borderColor: "transparent",
            backgroundColor: "white",
            paddingRight: "sm",
          }}
          title="Logout"
          titleColor="black"
          titleStyle={{
            lineHeight: RfValue(50),
          }}
          titleVariant="medium14"
        /> */}

        <Box marginTop={"lg"} />
        <Tile
          backgroundColor="white"
          leftIconColor="white"
          leftIconSvg="editUser"
          leftIconSvgSize="lg"
          onPress={() => navigation.navigate("UpdateProfileScreen")}
          tileContainerStyle={{
            paddingVertical: "sm",
            marginHorizontal: "md",
            marginBottom: "md",
            borderRadius: "mmd",
            borderWidth: 1.5,
            borderColor: "transparent",
            backgroundColor: "white",
            paddingRight: "sm",
          }}
          title="Profile Settings"
          subtitle="Edit and make changes to your profile"
          titleColor="black"
          titleStyle={{
            lineHeight: RfValue(25),
          }}
          titleVariant="medium14"
        />
        <Box marginTop={"md"} />
        <Tile
          backgroundColor="white"
          leftIconColor="white"
          leftIconSvg="notification"
          leftIconSvgSize="lg"
          onPress={() => {}}
          tileContainerStyle={{
            paddingVertical: "sm",
            marginHorizontal: "md",
            marginBottom: "md",
            borderRadius: "mmd",
            borderWidth: 1.5,
            borderColor: "transparent",
            backgroundColor: "white",
            paddingRight: "sm",
          }}
          title="Notifications settings"
          subtitle="Edit notification permissions and settings"
          titleColor="black"
          titleStyle={{
            lineHeight: RfValue(25),
          }}
          titleVariant="medium14"
        />
        <Box marginTop={"md"} />
        <Tile
          backgroundColor="white"
          leftIconColor="white"
          leftIconSvg="user"
          leftIconSvgSize="lg"
          onPress={() => {}}
          tileContainerStyle={{
            paddingVertical: "sm",
            marginHorizontal: "md",
            marginBottom: "md",
            borderRadius: "mmd",
            borderWidth: 1.5,
            borderColor: "transparent",
            backgroundColor: "white",
            paddingRight: "sm",
          }}
          title="Swap this account to Pro"
          subtitle="Swap to pro to provide services"
          titleColor="black"
          titleStyle={{
            lineHeight: RfValue(25),
          }}
          titleVariant="medium14"
        />
        <Box marginTop={"md"} />
        <Tile
          backgroundColor="white"
          leftIconColor="white"
          leftIconSvg="deactivate"
          leftIconSvgSize="lg"
          onPress={() => {}}
          tileContainerStyle={{
            paddingVertical: "sm",
            marginHorizontal: "md",
            marginBottom: "md",
            borderRadius: "mmd",
            borderWidth: 1.5,
            borderColor: "transparent",
            backgroundColor: "white",
            paddingRight: "sm",
          }}
          title="Deactivate account"
          subtitle="Temporary keep your account deactivated"
          titleColor="black"
          titleStyle={{
            lineHeight: RfValue(25),
          }}
          titleVariant="medium14"
        />
        <Box marginTop={"md"} />

        <Tile
          backgroundColor="white"
          leftIconColor="white"
          leftIconSvg="editUser"
          leftIconSvgSize="lg"
          onPress={() => {}}
          tileContainerStyle={{
            paddingVertical: "sm",
            marginHorizontal: "md",
            marginBottom: "md",
            borderRadius: "mmd",
            borderWidth: 1.5,
            borderColor: "transparent",
            backgroundColor: "white",
            paddingRight: "sm",
          }}
          title="Profile Settings"
          subtitle="Edit and make changes to your profile"
          titleColor="black"
          titleStyle={{
            lineHeight: RfValue(25),
          }}
          titleVariant="medium14"
        />
      </Box>
    </ScrollBox>
  );
};

export default MoreScreen;
