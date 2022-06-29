import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from '@material-ui/core';
import NextLink from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';

export default function TranslatorScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const translator = data.translators.find((a) => a.slug === slug);
  if (!translator) {
    return <div>Translator Not Found</div>;
  }
  return (
    <Layout title={translator.name} description={translator.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to translators</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={translator.image}
            alt={translator.name}
            width={380}
            height={480}
            // layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {translator.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {translator.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {translator.rating} stars ({translator.numReviews}{' '}
                reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography> Description: {translator.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Ksh {translator.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              {/* <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {translator.countInStock > 0 ? 'In stock' : 'Unavailable'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem> */}
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Procced with Translator
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
