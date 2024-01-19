import React, { useState, useEffect } from "react";
import APODViewer from "../../components/APODViewer";
import { Dayjs } from "dayjs";
import Picker from "../../common/Picker";
import { apodCustomProps } from "../../interfaces/interfaces";
import DateHelper from "../../helpers/date";
import { Grid } from "@mui/material";

interface AppProps {}

const Calendar: React.FC<AppProps> = ({}) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [listOfDays, setListOfDays] = useState<Array<apodCustomProps>>([]);

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const getData = async (specificDate: string) => {
    const arrUrls = await DateHelper.daysCombine(specificDate, 1);
    setListOfDays(arrUrls);
  };

  useEffect(() => {
    if (selectedDate) {
      const specificDate = DateHelper.dateToNasaFormat(selectedDate.format());
      const minusDay = DateHelper.nasaFormatMinusOne(specificDate);
      const fetchData = async () => {
        const arrUrls = await DateHelper.daysCombine(specificDate, 1);
        console.log(arrUrls);
        if (arrUrls.length === 0) {
          const arrUrls = await DateHelper.daysCombine(minusDay, 1);
          setListOfDays(arrUrls);
        }
      };
      fetchData();
      getData(specificDate);
    }
  }, [selectedDate]);

  return (
    <>
      <Grid container mt={3}>
        <Picker
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
        />
        <APODViewer listOfDays={listOfDays} />
      </Grid>
    </>
  );
};

export default Calendar;
