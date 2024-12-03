import { Box } from "@/shared/components/Box";
import { Text } from "@/shared/components/Typography";
import React, { FC } from "react";
import { ClientsNavigationProps } from "../../navigations/types";

const SearchScreen: FC<ClientsNavigationProps<"SearchScreen">> = () =>
  // {
  //   navigation,
  // }
  {
    return (
      <Box>
        <Text>SearchScreen</Text>
      </Box>
    );
  };

export default SearchScreen;
