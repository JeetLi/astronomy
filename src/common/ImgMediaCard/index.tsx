import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { sizeProps } from "../../interfaces/interfaces";

type DayContentType = {
  copyright: string;
  date: string;
  explanation: string;
  mediaType: string;
  title: string;
  url: string;
};

const ImgMediaCard = ({
  url,
  date,
  title,
  copyright,
  explanation,
  maxWidth,
  heightImg,
}: DayContentType & sizeProps) => {
  return (
    <Card sx={{ maxWidth: `${maxWidth}%` }}>
      <CardMedia component="img" alt={title} height={heightImg} image={url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {date}
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {copyright}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {explanation}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ImgMediaCard;
