import React, { useState, useEffect } from "react";
import APODViewer from "../../components/APODViewer";
import {
  apodCustomProps,
} from "../../interfaces/interfaces";
import DateHelper from "../../helpers/date";

interface AppProps {}

const Home: React.FC<AppProps> = ({}) => {
  const [listOfDays, setListOfDays] = useState<Array<apodCustomProps>>([]);

  useEffect(() => {
    async function getData() {
      const today = DateHelper.todayNasaFormat();
      const yesterday = DateHelper.nasaFormatMinusOne(today);
      const arrUrlsToday = await DateHelper.daysCombine(today, 1);
      setListOfDays(arrUrlsToday);
      if (arrUrlsToday.length === 0) {
        const arrUrlsYesterday = await DateHelper.daysCombine(yesterday, 1);
        setListOfDays(arrUrlsYesterday);
      }
    }
    getData();
  }, []);

  return (
    <>
      <APODViewer listOfDays={listOfDays} />
    </>
  );
};

export default Home;
