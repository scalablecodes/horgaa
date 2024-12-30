import React, { FC, useEffect, useRef, useState } from "react";
import { Box } from "@/shared/components/Box";
import { Text } from "@/shared/components/Typography";
import { ClientsNavigationProps } from "../../navigations/types";
import MainLayout from "@/shared/layout/MainLayout";
import { SvgIcon } from "@/assets/SvgIcon";
import { ScrollBox } from "@/shared/components/ScrollBox";
import { Rating } from "@kolking/react-native-rating";
import { Image } from "@/shared/components/Image";
import { horizontalScale, verticalScale } from "@/shared/theme";
import { FlatList } from "react-native";
import { adsData, TopHorgaa } from "./Index";
import { Pressable } from "@/shared/components/Pressable";

const SeeAllResult: FC<ClientsNavigationProps<"SeeAllResult">> = ({
  navigation,
  nearYou = false,
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
    <MainLayout HeaderTitle={"All Results"}>
      <ScrollBox paddingHorizontal={"md"} backgroundColor={"white"}>
        <Box marginTop={"xs"}>
          <Text variant={"semiBold22"}>Electricians</Text>
        </Box>
        <Box marginTop={"md"}>
          {nearYou && (
            <Box
              key={"1"}
              marginBottom={"sm"}
              flexDirection={"row"}
              alignItems={"center"}
              columnGap={"smd"}>
              <SvgIcon name="locations" size="sm" color={"textColor"} />
              <Text color={"textColor"}>Electricians near you</Text>
            </Box>
          )}

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
                    marginTop={"md"}
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
                      <Box>
                        <Text variant={"semiBold16"}>Tosin Kehinde</Text>
                        <Text marginBottom={"sm"} variant={"regular14"}>
                          Electrician
                        </Text>
                      </Box>
                    </Box>
                    <Box>
                      <Text>{" 6 miles away "}</Text>
                      <Rating size={16} rating={Number(item.rating)} />
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

export default SeeAllResult;
