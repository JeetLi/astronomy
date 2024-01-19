import React, { useEffect, useState } from "react";
import ImgMediaCard from "../../common/ImgMediaCard";
import { apodCustomProps } from "../../interfaces/interfaces";
import DateHelper from "../../helpers/date";
import { Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const ListAPOD: React.FC = () => {
  const [listOfDays, setListOfDays] = useState<Array<apodCustomProps>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      const today = DateHelper.todayNasaFormat();
      const arrUrls = await DateHelper.daysCombine(today, 10);
      setLoading(false);
      setListOfDays(arrUrls);
    }

    getData();
  }, []);
  console.log("test listOfDays", listOfDays);
  return (
    <>
      {loading ? (
        <Grid
          m-1
          container
          rowSpacing={1}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          <Grid xs={4} item>
            <Skeleton variant="rounded" width={400} height={500} />
          </Grid>
          <Grid xs={4} item>
            <Skeleton variant="rounded" width={400} height={500} />
          </Grid>
          <Grid xs={4} item>
            <Skeleton variant="rounded" width={400} height={500} />
          </Grid>
          <Grid xs={4} item>
            <Skeleton variant="rounded" width={400} height={500} />
          </Grid>
          <Grid xs={4} item>
            <Skeleton variant="rounded" width={400} height={500} />
          </Grid>
          <Grid xs={4} item>
            <Skeleton variant="rounded" width={400} height={500} />
          </Grid>
        </Grid>
      ) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          {listOfDays &&
            listOfDays.map(
              (dayData, key) =>
                dayData.day && (
                  <Grid xs={4} item key={key}>
                    <ImgMediaCard
                      key={key}
                      maxWidth={100}
                      heightImg={200}
                      copyright={dayData.day?.copyright}
                      date={dayData.day.date}
                      explanation={dayData.day.explanation}
                      mediaType={dayData.day.explanation}
                      title={dayData.day.title}
                      url={dayData.day.url}
                    />
                  </Grid>
                )
            )}
        </Grid>
      )}
    </>
  );
};

export default ListAPOD;
