import React from "react";

import ImgMediaCard from "../../common/ImgMediaCard";
import {
  apodCustomProps,
} from "../../interfaces/interfaces";

const APODViewer: React.FC<{ listOfDays: apodCustomProps[] }> = ({
  listOfDays,
}) => {
  return (
    <>
      {listOfDays &&
        listOfDays.map(
          (dayData, key) =>
            key === 0 &&
            dayData.day && (
              <ImgMediaCard
                key={key}
                maxWidth={100}
                heightImg={400}
                copyright={dayData.day?.copyright}
                date={dayData.day.date}
                explanation={dayData.day.explanation}
                mediaType={dayData.day.explanation}
                title={dayData.day.title}
                url={dayData.day.url}
              />
            )
        )}
    </>
  );
};

export default APODViewer;
