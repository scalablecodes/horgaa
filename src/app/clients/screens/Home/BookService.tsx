import { Box } from "@/shared/components/Box";
import { ScrollBox } from "@/shared/components/ScrollBox";
import React, { FC, useState } from "react";
import MainLayout from "@/shared/layout/MainLayout";
import { ClientsNavigationProps } from "../../navigations/types";
import SimpleInput from "@/shared/components/TextInput/SimpleInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DateInput } from "@/shared/components/DateTimePicker";
import useStatusModal from "@/hooks/StatusModal";

const bookSchema = yup.object().shape({
  address: yup.string().required("Address is required"),
  description: yup.string().required("Description is required"),
  date: yup.date().required("Date is required"),
  time: yup.date().required("Time is required"),
});

interface BookFormData {
  address: String;
  description: String;
  time: Date;
  date: Date;
}

const BookService: FC<ClientsNavigationProps<"ProDetails">> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState(false);
  const { openStatusModal, dismissBottomSheet } = useStatusModal();

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BookFormData>({
    resolver: yupResolver(bookSchema),
    mode: "onBlur",
    shouldFocusError: true,
  });

  const onSubmit = (data: BookFormData) => {
    setLoading(true);
    console.log(data);

    setTimeout(() => {
      setLoading(false);
      openStatusModal({
        message:
          "You have successfully booked a pro Horgaa, we’d notify you when he accepts.",
        status: "success",
        buttonLabel: "done",
        onProceed: () => {
          dismissBottomSheet();
          navigation.replace("BottomTabs", { screen: "MyJobScreen" });
        },
      });
    }, 2000);
  };

  return (
    <MainLayout
      activityLoading={loading}
      hasBottomButton
      bottomButtonText="Book Service"
      bottomButtonPress={handleSubmit(onSubmit)}
      HeaderTitle={"Book Service"}>
      <ScrollBox padding={"md"} backgroundColor={"white"}>
        <Box>
          <Box marginTop={"md"}>
            <SimpleInput
              control={control}
              label="Address"
              name="address"
              error={errors.address?.message}
              borderColor="gray200"
              labelColor="black"
              inputProps={{
                placeholder: "Enter address here",
                placeholderTextColor: "#9ca3af",
                onBlur: () => trigger("address"),
                onSubmitEditing: handleSubmit(onSubmit),
              }}
            />
          </Box>
          <Box marginTop={"md"}>
            <SimpleInput
              control={control}
              label="Brief Description"
              name="description"
              error={errors.description?.message}
              borderColor="gray200"
              labelColor="black"
              inputProps={{
                numberOfLines: 5,
                multiline: true,
                placeholder: "Enter description here",
                placeholderTextColor: "#9ca3af",
                onBlur: () => trigger("description"),
                onSubmitEditing: handleSubmit(onSubmit),
              }}
            />
          </Box>

          <Box width={"100%"} marginTop="md">
            <DateInput
              control={control}
              label="Request Date"
              name="date"
              errorMessage={errors.date?.message}
              getSelectedDate={date => setValue("date", date)}
              minimumDate={new Date()}
            />
          </Box>
          <Box width={"100%"} marginTop="md">
            <DateInput
              control={control}
              rightIconName="clock"
              label="Request Time"
              name="time"
              errorMessage={errors.time?.message}
              getSelectedDate={date => setValue("time", date)}
              minimumDate={new Date()}
              displayType="clock"
            />
          </Box>
        </Box>
      </ScrollBox>
    </MainLayout>
  );
};

export default BookService;
