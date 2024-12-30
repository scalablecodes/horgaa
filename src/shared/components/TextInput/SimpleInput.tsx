/* eslint-disable react-native/no-inline-styles */
import React, { useMemo, useState } from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import {
  TextInput,
  TextInputProps,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  Clipboard,
} from "react-native";

import { Text } from "../Typography";
import { palette, PaletteType } from "@/shared/theme/palette";
import { Box } from "../Box";
import { SvgIcon } from "@/assets/SvgIcon";
import RfValue from "@/helpers/RfValue";
import { fontFamily } from "@/shared/theme";

type SimpleInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  isPassword?: boolean;
  isAmount?: boolean;
  error?: string;
  inputProps?: TextInputProps;
  valueStyle?: StyleProp<TextStyle>;
  borderColor?: PaletteType;
  labelColor?: PaletteType;
  allowPaste?: boolean;
  currency?: string;
  isPasswordIconBlue?: boolean;
};

const SimpleInput = <T extends FieldValues>({
  control,
  name,
  label,
  // isPasswordIconBlue = false,
  isPassword = false,
  isAmount = false,
  error,
  inputProps,
  valueStyle,
  borderColor = "gray400",
  labelColor = "green400",
  allowPaste = false,
  currency = "NGN",
}: SimpleInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(!isPassword);

  const inputStyle = useMemo(
    () => [
      {
        fontSize: RfValue(16),
        color: palette.black,
        padding: 0,
        margin: 0,
        fontFamily: fontFamily.regular,
        flex: 1,
        height: inputProps?.numberOfLines ? RfValue(80) : RfValue(25),
      },
      valueStyle,
    ],
    [inputProps?.numberOfLines, valueStyle],
  );

  const handlePaste = async (setValue: (value: string) => void) => {
    const text = await Clipboard.getString();
    setValue(text);
  };

  return (
    <>
      <Box
        position={"relative"}
        borderWidth={1}
        borderColor={error ? "red800" : borderColor}
        borderRadius={"sm"}
        paddingVertical="sm"
        paddingHorizontal={"md"}>
        {label && (
          <Text
            variant="regular10"
            color={error ? "red800" : labelColor}
            mb="sm">
            {label.toUpperCase()}
          </Text>
        )}

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Box flexDirection="row" alignItems="center">
              <TextInput
                autoCapitalize="none"
                autoComplete="off"
                onChangeText={onChange}
                value={value}
                style={inputStyle}
                secureTextEntry={!showPassword}
                {...inputProps}
              />

              <Box flexDirection="row" alignItems="center">
                {isPassword && (
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      bottom: RfValue(1),
                      right: RfValue(5),
                    }}>
                    <SvgIcon
                      name={showPassword ? "eye" : "eyeClose"}
                      size="md"
                      color="gray200"
                    />
                  </TouchableOpacity>
                )}
                {isAmount && (
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      bottom: RfValue(1),
                      right: RfValue(5),
                    }}>
                    <Text variant={"regular18"}>{currency}</Text>
                  </TouchableOpacity>
                )}

                {allowPaste && (
                  <TouchableOpacity onPress={() => handlePaste(onChange)}>
                    <SvgIcon name="newCopy" size="md" color="gray200" />
                  </TouchableOpacity>
                )}
              </Box>
            </Box>
          )}
        />
      </Box>
      {error && (
        <Text color="red800" variant="regular12" mt="xs">
          {error}
        </Text>
      )}
    </>
  );
};

export default SimpleInput;
