/* eslint-disable react-native/no-inline-styles */
import { StackScreenProps } from "@react-navigation/stack";

import React, { useMemo, useRef } from "react";
import { FlatList, Pressable } from "react-native";
import {
  BottomSheetModal,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

// Assuming these are custom components/types from your design system
import { Text } from "@/shared/components/Typography";
import { Box } from "@/shared/components/Box";
import { SvgIcon } from "@/assets/SvgIcon";
import { Backdrop } from "../Backdrop";
import { PaletteType } from "@/shared/theme/palette";

export type RootStackParamList = {
  SellfxScreen: undefined;
  // Add other screen types as needed
};

export type AppNavigationProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
// Types
export interface Item {
  id: string;
  value: string;
}

interface SelectModalProps<TFieldValues extends FieldValues> {
  title: string;
  items: Item[];
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  placeholder?: string;
  rules?: any;
  errorMessage?: string;
  inputColor?: PaletteType;
  borderColor?: PaletteType;
}

const SelectInput = <TFieldValues extends FieldValues>({
  title,
  items,
  name,
  control,
  placeholder = "Select an option",
  errorMessage = "",
  inputColor = "black",
  borderColor = "white",
  rules,
}: SelectModalProps<TFieldValues>) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Memoized snap points based on items length
  const snapPoints = useMemo(() => {
    if (items.length > 8) {
      return ["80%", "80%"];
    }
    if (items.length < 3) {
      return ["30%", "30%"];
    }
    return ["50%", "50%"];
  }, [items.length]);

  // Open bottom sheet
  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  // Dismiss bottom sheet
  const handleDismissModal = () => {
    bottomSheetModalRef.current?.dismiss();
  };

  // Backdrop renderer
  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <Backdrop onPress={handleDismissModal} {...props} />
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        // Find the selected item's value
        const selectedItemValue = items.find(item => item.id === value)?.value;

        return (
          <Box marginVertical="sm">
            <Pressable onPress={handlePresentModal}>
              <Box
                borderColor={errorMessage ? "red400" : borderColor}
                borderRadius="sm"
                borderWidth={0.5}
                flexDirection="row"
                justifyContent="space-between"
                paddingHorizontal="sm"
                paddingVertical="sm">
                <Box>
                  <Text color={inputColor} variant="regular10">
                    {title.toUpperCase()}
                  </Text>
                  <Text
                    marginTop={"sm"}
                    color={value ? inputColor : "gray200"}
                    numberOfLines={1}
                    variant="regular16">
                    {selectedItemValue || placeholder}
                  </Text>
                </Box>
                <Box alignItems="center" justifyContent="center">
                  <SvgIcon color="black" name="chevronDown" size="m" />
                </Box>
              </Box>
            </Pressable>

            {(error || errorMessage) && (
              <Text color="red400" variant="regular12">
                {error?.message || errorMessage}
              </Text>
            )}

            <BottomSheetModal
              ref={bottomSheetModalRef}
              snapPoints={snapPoints}
              backdropComponent={renderBackdrop}
              enableContentPanningGesture={false}>
              <BottomSheetView style={{ flex: 1 }}>
                <Box flex={1}>
                  <Text
                    color="black"
                    marginBottom="md"
                    marginTop="md"
                    marginHorizontal="sm"
                    variant="bold14">
                    {title}
                  </Text>

                  <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <Pressable
                        onPress={() => {
                          onChange(item.id);
                          handleDismissModal();
                        }}>
                        <Box
                          backgroundColor={
                            value === item.id ? "blue200" : "white"
                          }
                          paddingVertical="mmd">
                          <Text
                            marginHorizontal="sm"
                            color={value === item.id ? "primary" : "textColor"}
                            variant="regular14">
                            {item.value}
                          </Text>
                        </Box>
                      </Pressable>
                    )}
                  />
                </Box>
              </BottomSheetView>
            </BottomSheetModal>
          </Box>
        );
      }}
    />
  );
};

export default SelectInput;
