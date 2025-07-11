import React, { FC, useEffect, useRef, useState } from "react";
import { Box } from "@/shared/components/Box";
import { Text } from "@/shared/components/Typography";
import { ClientsNavigationProps } from "../../navigations/types";
import MainLayout from "@/shared/layout/MainLayout";
import { SvgIcon } from "@/assets/SvgIcon";
import { ScrollBox } from "@/shared/components/ScrollBox";
import { Image } from "@/shared/components/Image";
import { horizontalScale, verticalScale } from "@/shared/theme";
import { FlatList } from "react-native";

import { Pressable } from "@/shared/components/Pressable";
import { adsData, TopHorgaa } from "../Home/Index";

const MyJobScreen: FC<ClientsNavigationProps<"SeeAllResult">> = ({
  navigation,
}: {
  navigation: any;
  nearYou?: boolean;
}) => {
  const flatListRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const [rating, setRating] = useState();

  // const handleChange = useCallback(
  //   (value: number) => setRating(Math.round((rating + value) * 5) / 10),
  //   [rating],
  // );

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
    <MainLayout hideBackButton HeaderTitle={"My jobs"}>
      <ScrollBox paddingHorizontal={"md"} backgroundColor={"white"}>
        <Box>
          <Box>
            <FlatList
              data={TopHorgaa}
              decelerationRate="fast"
              keyExtractor={({ id }: any) => id}
              renderItem={({ item }) => (
                <Pressable
                  key={item.id}
                  onPress={() => navigation.navigate("ProDetails")}>
                  <Box
                    marginBottom={"md"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    borderRadius={"md"}
                    width={"100%"}>
                    <Box
                      flexDirection={"row"}
                      alignItems={"center"}
                      columnGap={"md"}>
                      <Box
                        marginBottom={"sm"}
                        backgroundColor={"gray100"}
                        padding={"xs"}
                        borderRadius={"xl"}>
                        <SvgIcon name="briefcase" size="md" color="gray400" />
                      </Box>
                      <Box>
                        <Text marginBottom={"sm"} variant={"semiBold16"}>
                          Tosin Kehinde
                        </Text>
                        <Box
                          marginBottom={"sm"}
                          flexDirection={"row"}
                          alignItems={"center"}
                          columnGap={"sm"}>
                          <Image
                            source={item.uri}
                            resizeMode="contain"
                            width={horizontalScale(25)}
                            height={verticalScale(25)}
                          />
                          <Text variant={"regular14"}>Tayo Aina</Text>
                        </Box>
                        <Text>Monday, 5th January - 11:50pm</Text>
                      </Box>
                    </Box>
                    <Box
                      backgroundColor={"blue200"}
                      paddingVertical={"sm"}
                      paddingHorizontal={"md"}
                      borderRadius={"lg"}>
                      <Text variant={"regular12"}>{"Pending"}</Text>
                    </Box>
                  </Box>
                </Pressable>
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
        </Box>
      </ScrollBox>
    </MainLayout>
  );
};

export default MyJobScreen;
