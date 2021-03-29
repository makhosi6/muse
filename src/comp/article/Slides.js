import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import { Paper, Breadcrumbs } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px auto",
    display: "flex",
    maxWidth: "100%",
    paddingBottom: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "100%",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center"
  },
  details: {
    display: "flex",
    maxHeight: "fit-content",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  centre: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
}));
export default function Slides(prop) {
  console.warn(prop.data);
  const classes = useStyles();
  return (
    <Card id="head" className={classes.root}>
      <div id="head" className={classes.details}>
        <Paper id="head" className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm container>
              <Carousel
                className={classes.centre}
                style={{ margin: "auto", color: "white",  width: "100%"}}
              >
                { prop.data.map(item => {  
                  
                  console.error("FROM <Slide/>", item);
                  return (item)? (
                  <div key={`${Math.random() * 1000}`}>
                    <Breadcrumbs style={{color: "whitesmoke"}} aria-label="breadcrumb">
                      <Link
                      target="_blank"
                        color="inherit"
                        href={item.src_url}
                      >
                        <img
                          style={{ objectFit: "cover" }}
                          src={item.src_logo}
                          width="fit-content"
                          height="12"
                          alt={item.src_name}
                        />
                      </Link>
                      <Link 
                       target="_blank"
                        color="inherit"
                        href={item.catLink}
                      >
                       {item.tag||item.category}
                      </Link>
                    </Breadcrumbs>
                    <Typography  variant="subtitle1" gutterBottom>
                      <Box
                        fontWeight="fontWeightBold"
                        lineHeight="normal"
                        m={1} >
                        <Link style={{color: "white"}} target="_blank" href={item.url}>
                          {item.headline}
                        </Link>
                      </Box>
                    </Typography>
                  </div>
                )
                : 
                
                ("NOTHING, Item is not Available")
              })}
              </Carousel>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Card>
  );
}
