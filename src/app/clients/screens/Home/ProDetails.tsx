import { Box } from "@/shared/components/Box";
import { ScrollBox } from "@/shared/components/ScrollBox";
import { Text } from "@/shared/components/Typography";
import React, { FC, useEffect, useRef, useState } from "react";

import { Image } from "@/shared/components/Image";
import { avatar } from "@/assets/pngImagePack";
import { horizontalScale, verticalScale } from "@/shared/theme";
import { FlatList, TouchableOpacity } from "react-native";
import { SvgIcon } from "@/assets/SvgIcon";
import MainLayout from "@/shared/layout/MainLayout";
import { ClientsNavigationProps } from "../../navigations/types";
import { Rating } from "@kolking/react-native-rating";
import { adsData, TopHorgaa } from "./Index";

const ProDetails: FC<ClientsNavigationProps<"ProDetails">> = ({
  navigation,
}) => {
  const flatListRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flatListRef.current && adsData?.length > 1 && TopHorgaa?.length > 1) {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= adsData?.length) {
          nextIndex = 0;
        }
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setCurrentIndex(nextIndex);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <MainLayout
      hasBottomButton
      bottomButtonText="Book Service"
      bottomButtonPress={() => navigation.navigate("BookService")}
      HeaderTitle={"View Pro"}>
      <ScrollBox padding={"md"} backgroundColor={"white"}>
        <Box justifyContent={"center"} alignItems={"center"}>
          <Image
            borderRadius={"xl"}
            height={verticalScale(120)}
            width={horizontalScale(120)}
            source={avatar}
          />
          <Text marginTop="sm" variant={"semiBold22"}>
            John Simeon
          </Text>
          <Text variant={"medium14"} marginTop={"sm"}>
            Electrician
          </Text>
          <Box
            flexDirection={"row"}
            alignItems={"center"}
            columnGap={"xs"}
            marginTop={"sm"}>
            <SvgIcon name="active" color="green800" size="md" />
            <Text variant={"medium14"}>open to work</Text>
          </Box>

          <Box
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            columnGap={"lg"}>
            <TouchableOpacity>
              <Box
                backgroundColor={"blue200"}
                padding={"sm"}
                borderRadius={"xl"}
                flexDirection={"row"}
                alignItems={"center"}
                columnGap={"xs"}
                marginTop={"sm"}>
                <SvgIcon name="phone" color="primary" size="md" />
              </Box>
            </TouchableOpacity>
            <TouchableOpacity>
              <Box
                backgroundColor={"blue200"}
                padding={"sm"}
                borderRadius={"xl"}
                flexDirection={"row"}
                alignItems={"center"}
                columnGap={"xs"}
                marginTop={"sm"}>
                <SvgIcon name="message" color="primary" size="md" />
              </Box>
            </TouchableOpacity>
          </Box>

          <Box
            width={"100%"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={"sm"}>
            <Box alignItems={"center"} columnGap={"xs"} marginTop={"sm"}>
              <SvgIcon name="clock" size="md" />
              <Text variant={"semiBold18"}>50+</Text>
              <Text variant={"medium14"}>Hours</Text>
            </Box>
            <Box alignItems={"center"} columnGap={"xs"} marginTop={"sm"}>
              <SvgIcon name="userOutline" size="md" />
              <Text variant={"semiBold18"}>30+</Text>
              <Text variant={"medium14"}>Customers</Text>
            </Box>
            <Box alignItems={"center"} columnGap={"xs"} marginTop={"sm"}>
              <SvgIcon name="medal" size="md" />
              <Text variant={"semiBold18"}>5</Text>
              <Text variant={"medium14"}>Badges</Text>
            </Box>
            <Box alignItems={"center"} columnGap={"xs"} marginTop={"sm"}>
              <SvgIcon name="star" size="md" />
              <Text variant={"semiBold18"}>4.8</Text>
              <Text variant={"medium14"}>Rating</Text>
            </Box>
          </Box>

          <Box
            width={"100%"}
            marginTop={"lg"}
            marginBottom={"sm"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Box flexDirection={"row"} alignItems={"center"} columnGap={"smd"}>
              <SvgIcon name="exportIcon" size="sm" />
              <Text color={"textColor"}>Reviews & Ratings</Text>
            </Box>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewScreen")}>
              <Text variant={"medium16"} color={"primary"}>
                View all
              </Text>
            </TouchableOpacity>
          </Box>

          <FlatList
            data={TopHorgaa}
            decelerationRate="fast"
            keyExtractor={({ id }: any) => id}
            horizontal
            renderItem={({ item }) => (
              <Box
                marginRight={"sm"}
                marginTop={"md"}
                alignItems={"center"}
                backgroundColor={"blue200"}
                borderRadius={"md"}
                width={horizontalScale(140)}
                paddingVertical={"md"}
                paddingHorizontal={"sm"}>
                <Box flexDirection={"row"} width={"100%"}>
                  <Box
                    marginBottom={"sm"}
                    backgroundColor={"Blue800"}
                    padding={"xs"}
                    borderRadius={"xl"}>
                    <Image
                      source={item.uri}
                      resizeMode="contain"
                      width={horizontalScale(40)}
                      height={verticalScale(40)}
                    />
                  </Box>
                  <Box marginLeft={"xs"}>
                    <Text variant={"semiBold16"}>Tosin K.</Text>
                    <Text marginBottom={"sm"} variant={"regular14"}>
                      Electrician
                    </Text>
                  </Box>
                </Box>
                <Text marginBottom={"sm"}>
                  He is an outstanding artisan with speed in delivery of his
                  quality service. Kind and hardworking man.
                </Text>
                <Rating size={16} rating={Number(item.rating)} />
              </Box>
            )}
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            pagingEnabled
            onScrollToIndexFailed={() => {
              setCurrentIndex(0);
              flatListRef.current.scrollToIndex({
                index: 0,
                animated: true,
              });
            }}
          />
        </Box>
      </ScrollBox>
    </MainLayout>
  );
};

export default ProDetails;
