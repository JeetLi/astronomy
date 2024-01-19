import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";

type PickerProps = {
  selectedDate: Dayjs | null;
  handleDateChange: (date: Dayjs | null) => void;
};

const Picker: React.FC<PickerProps> = ({ selectedDate, handleDateChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        defaultValue={dayjs(Date())}
      />
    </LocalizationProvider>
  );
};

export default Picker;
