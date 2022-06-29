import Layout from '../components/Layout';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import NextLink from 'next/link';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Translators</h1>
        <Grid container spacing={5}>
          {data.translators.map((translator) => (
            <Grid item md={3} key={translator.name}>
              <Card>
                <NextLink href={`/translator/${translator.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={translator.image}
                      title={translator.name}
                      width={300}
                      height={400}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{translator.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>Ksh{translator.price}</Typography>
                  <Button size="small" color="primary">
                    Add translator translator
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
