import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGetAttractionByIdQuery } from "../services/attraction";
import Grid from "@mui/material/Grid";
import { useSelector } from 'react-redux'


export default function AttractionCard() {
    const attractionId = useSelector((state) => state.attraction.value)
    const { data, error, isLoading } = useGetAttractionByIdQuery(attractionId);

  return (
    <>
      {error ? (
        <>Oh on, there was an error</>
      ) : isLoading ? (
        <>Loading....</>
      ) : data ? (
        <>
          <Card>
            <Grid container>
              <Grid item sm={6}>
                <CardMedia
                  component="img"
                  width="100%"
                  image={data.attraction.coverimage}
                />
              </Grid>

              <Grid item sm={6}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.attraction.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.attraction.detail}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </>
      ) : null}
    </>
  );
}
