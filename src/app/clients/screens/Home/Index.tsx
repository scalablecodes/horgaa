import { ad_1, avatar } from "@/assets/pngImagePack";
import { SvgIcon } from "@/assets/SvgIcon";
import { Box } from "@/shared/components/Box";
import { Image } from "@/shared/components/Image";
import { ScrollBox } from "@/shared/components/ScrollBox";
import { Text } from "@/shared/components/Typography";
import { horizontalScale, verticalScale } from "@/shared/theme";
import { PaletteType } from "@/shared/theme/palette";
import { Rating } from "@kolking/react-native-rating";
import React, { FC, useEffect, useRef, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ClientsNavigationProps } from "../../navigations/types";

const adsData = [
  { id: "1", uri: ad_1 },
  { id: "2", uri: ad_1 },
  { id: "3", uri: ad_1 },
];

type categoryTypes = {
  mainColor: PaletteType;
  IconBgColor: PaletteType;
  category: String;
  subCategory: String;
};

const categoryData: categoryTypes[] = [
  {
    mainColor: "blue200",
    IconBgColor: "blue400",
    category: "Medical",
    subCategory: "Dentist",
  },
  {
    mainColor: "green200",
    IconBgColor: "green400",
    category: "Electrician",
    subCategory: "AC Compressor",
  },
  {
    mainColor: "red200",
    IconBgColor: "red400",
    category: "Carpenter",
    subCategory: "Dentist",
  },
  {
    mainColor: "orange200",
    IconBgColor: "orange400",
    category: "Barber",
    subCategory: "",
  },
];
const TopHorgaa = [
  {
    id: "1",
    name: "Kelvin Abiodun",
    uri: avatar,
    rating: "4.5",
  },
  {
    id: "2",
    name: "Kelvin Abiodun",
    uri: avatar,
    rating: "4.5",
  },
  {
    id: "3",
    name: "Kelvin Abiodun",
    uri: avatar,
    rating: "4.5",
  },
  {
    id: "4",
    name: "Kelvin Abiodun",
    uri: avatar,
    rating: "4.5",
  },
];

const HomeScreen: FC<ClientsNavigationProps<"HomeScreen">> = ({
  navigation,
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
    <ScrollBox padding={"md"} backgroundColor={"white"}>
      <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
        <Box
          borderWidth={1}
          borderColor={"gray400"}
          borderRadius={"sm"}
          height={verticalScale(40)}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingHorizontal={"sm"}
          flexDirection={"row"}>
          <Text color={"textColor"}>Search for people around you</Text>

          <SvgIcon name="search" size="md" />
        </Box>
      </TouchableOpacity>

      <Box marginTop={"md"}>
        <FlatList
          data={adsData}
          decelerationRate="fast"
          keyExtractor={({ id }: any) => id}
          horizontal
          renderItem={({ item }) => (
            <Image
              source={item.uri}
              borderRadius="md"
              marginRight={"sm"}
              height={verticalScale(152)}
              width={horizontalScale(330)}
            />
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

      <Box
        marginTop={"lg"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Text variant="bold18">Categories</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text color={"primary"}>See all</Text>
        </TouchableOpacity>
      </Box>
      <Box>
        <FlatList
          data={categoryData}
          decelerationRate="fast"
          keyExtractor={({ id }: any) => id}
          horizontal
          renderItem={({ item }) => (
            <Box
              marginRight={"md"}
              marginTop={"md"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={item.mainColor}
              borderRadius={"md"}
              width={horizontalScale(90)}
              height={verticalScale(90)}>
              <Box
                backgroundColor={item.IconBgColor}
                padding={"sm"}
                borderRadius={"xl"}>
                <SvgIcon name="briefcase" size="md" color="transparent" />
              </Box>
              <Text>{item.category}</Text>
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

      <Box
        marginTop={"lg"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Text variant="bold18">Top Horgaa</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text color={"primary"}>See all</Text>
        </TouchableOpacity>
      </Box>

      <Box>
        <FlatList
          data={TopHorgaa}
          decelerationRate="fast"
          keyExtractor={({ id }: any) => id}
          horizontal
          renderItem={({ item }) => (
            <Box
              marginRight={"md"}
              marginTop={"md"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"blue200"}
              borderRadius={"md"}
              width={horizontalScale(140)}
              height={verticalScale(160)}>
              <Box
                marginBottom={"sm"}
                backgroundColor={"Blue800"}
                padding={"xs"}
                borderRadius={"xl"}>
                <Image
                  source={item.uri}
                  resizeMode="contain"
                  width={horizontalScale(60)}
                  height={verticalScale(60)}
                />
              </Box>
              <Text variant={"semiBold16"}>Tosin Kehinde</Text>
              <Text marginBottom={"sm"} variant={"regular14"}>
                Private Tutor
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
  );
};
export default HomeScreen;
