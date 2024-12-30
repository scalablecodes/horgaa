import { Box } from "@/shared/components/Box";
import { Text } from "@/shared/components/Typography";
import React, { FC } from "react";
import { ClientsNavigationProps } from "../../navigations/types";
import MainLayout from "@/shared/layout/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SimpleInput from "@/shared/components/TextInput/SimpleInput";
import { SvgIcon } from "@/assets/SvgIcon";
import { ScrollBox } from "@/shared/components/ScrollBox";

const searchSchema = yup.object().shape({
  search: yup.string().required("This is required"),
});

interface SearchFormData {
  search: string; // Changed from number to string since it's a search input
}

const SearchScreen: FC<ClientsNavigationProps<"SearchScreen">> = ({
  navigation,
}) => {
  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: yupResolver(searchSchema),
    mode: "onBlur",
    shouldFocusError: true,
  });

  const onSubmit = (data: SearchFormData) => {
    // Navigate to ResultScreen with search query as parameter
    navigation.navigate("ResultScreen", { searchQuery: data.search });
  };

  return (
    <MainLayout HeaderTitle={"Search for professionals"}>
      <ScrollBox paddingHorizontal={"md"} backgroundColor={"white"}>
        <Box marginTop={"xs"}>
          <SimpleInput
            control={control}
            name="search"
            error={errors.search?.message}
            borderColor="gray200"
            labelColor="black"
            inputProps={{
              placeholder: "Search for Horgaas around you",
              placeholderTextColor: "#9ca3af",
              onBlur: () => trigger("search"),
              onSubmitEditing: handleSubmit(onSubmit), // Handle form submission on keyboard submit
            }}
          />
        </Box>
        <Box marginTop={"md"}>
          <Text color={"gray400"}>Recent Searches</Text>
          <Box marginTop={"sm"} />
          <Box
            key={"1"}
            marginBottom={"sm"}
            flexDirection={"row"}
            alignItems={"center"}
            columnGap={"smd"}>
            <SvgIcon name="exportIcon" size="sm" />
            <Text>Electrician</Text>
          </Box>
        </Box>
        <Box
          key={"2"}
          marginBottom={"sm"}
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={"smd"}>
          <SvgIcon name="exportIcon" size="sm" />
          <Text>Plumber</Text>
        </Box>
        <Box
          key={"3"}
          marginBottom={"sm"}
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={"smd"}>
          <SvgIcon name="exportIcon" size="sm" />
          <Text>Teacher</Text>
        </Box>
      </ScrollBox>
    </MainLayout>
  );
};

export default SearchScreen;
