import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "material-ui-image";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px auto",
    display: "flex",
    maxWidth: 700
  },
  paper: {
    padding: theme.spacing(1),

    maxWidth: 700
  },
  details: {
    display: "flex",
    maxHeight: "fit-content",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    maxWidth: 700,
    flex: "5 0 auto"
  },
  cover: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    maxHeight: "150px",
    margin: "0 auto",
    width: "40%",
    borderRightColor: "#bfbbbb"
  },
  controls: {
    maxWidth: "100%",
    display: "flex",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  icon: {
    float: "right"
  }
}));
export default function Article(prop) {
  const classes = useStyles();

  return (
    <article> 
    <Card className={classes.root}>
      <div className={classes.details}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    {/*todo: IF THE PROP DATA IS A ARRAY OF DATA/STORIES THIS MUST BE A SLIDE*/}{" "}
                    <Breadcrumbs data={prop.data} />{" "}
                  </Typography>{" "}
                  <Typography variant="subtitle1" gutterBottom>
                    <Box fontWeight="fontWeightBold" lineHeight="normal" m={1}>
                      <Link color="inherit" href={prop.data.url}>
                        {" "}
                        {prop.data.headline}{" "}
                      </Link>{" "}
                    </Box>{" "}
                  </Typography>{" "}
                  <Typography variant="body2">
                    <Box boxShadow={0} lineHeight="normal" m={1}>
                      {" "}
                      {prop.data.lede}{" "}
                    </Box>{" "}
                  </Typography>{" "}
                </Grid>{" "}
                <Grid item>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ cursor: "pointer" }}
                  >
                  <Box
                      lineHeight="normal"
                      style={{ cursor: "auto" }}
                      component="div"
                      display="inline"
                      p={0}
                      m={1}
                      bgcolor="background.paper"
                    >
                      {prop.data.date}{" "}
                    </Box>{" "}
                    <Box
                      lineHeight="normal"
                      style={{ cursor: "auto" }}
                      component="div"
                      display="inline"
                      p={1}
                      m={1}
                      bgcolor="background.paper"
                    >
                    {prop.data.author !== null
                        ? `By ${prop.data.author}`
                        : null}{" "}
                    </Box>{" "}
                    <Box
                      lineHeight="normal"
                      style={{ cursor: "auto" }}
                      component="div"
                      display="inline"
                      p={1}
                      m={1}
                      bgcolor="background.paper"
                    >
                        {prop.data.isVid === true ? (
                          <Tooltip title="Video">
                          <PlayCircleFilledIcon className={classes.icon} />
                          </Tooltip>
                        ) : null}
                    </Box>{" "}
                  </Typography>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Paper>{" "}
      </div>{" "}
      <CardMedia className={classes.cover} id="imgWrapper">
        <Image
          onClick={event => (window.location.href = `${prop.data.url}`)}
          style={{
            width: "100%",
            margin: "0 auto",
            maxHeight: "150px",
            objectFit: "cover",
            cursor: "pointer"
          }}
          src={prop.data.thumbnail}
        />{" "}
      </CardMedia>{" "}
    </Card>
    </article>
  );
}
