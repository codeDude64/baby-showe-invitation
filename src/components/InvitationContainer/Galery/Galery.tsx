import { Card, CardContent, ImageList, ImageListItem, Typography } from '@mui/material';

import galery1 from '../../../assets/galery1.jpg';
import galery2 from '../../../assets/galery2.jpg';
import galery3 from '../../../assets/galery3.jpg';
import galery4 from '../../../assets/galery4.jpg';
import galery5 from '../../../assets/galery5.jpg';
import galery6 from '../../../assets/galery6.jpg';
import galery7 from '../../../assets/galery7.jpg';
import galery8 from '../../../assets/galery8.jpg';
import handPhoto from '../../../assets/manita.jpg';
import useStyles from './useStyles';

const Galery = () => {
  const { classes } = useStyles();

  const images = [
    { img: galery1, title: 'galery1', cols: 1, rows: 1 },
    { img: galery2, title: 'galery2', cols: 1, rows: 1 },
    { img: galery3, title: 'galery3', cols: 1, rows: 1 },
    { img: galery4, title: 'galery4', cols: 1, rows: 1 },
    { img: galery5, title: 'galery5', cols: 1, rows: 1 },
    { img: galery6, title: 'galery6', cols: 1, rows: 1 },
    { img: galery7, title: 'galery7', cols: 1, rows: 1 },
    { img: galery8, title: 'galery8', cols: 1, rows: 1 },
    { img: handPhoto, title: 'manita', cols: 1, rows: 1 },
  ];

  return (
    <Card className={classes.container}>
      <CardContent>
        <Typography pb={4} pt={2} className={classes.title}>
          Galería
        </Typography>
        <ImageList sx={{ width: '100%', height: 500 }} cols={3} rowHeight={164}>
          {images.map((image) => (
            <ImageListItem key={image.img} cols={image.cols || 1} rows={image.rows || 1}>
              <img
                src={`${image.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${image.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={image.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </Card>
  );
};

export default Galery;
