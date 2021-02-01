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

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px auto",
    display: "flex",
    maxWidth: 700,
  },
  paper: {
    padding: theme.spacing(1),

    maxWidth: 700,
  },
  details: {
    display: "flex",
    maxHeight: "fit-content",
    flexDirection: "column",
    width: "100%",
  },
  content: {
    maxWidth: 700,
    flex: "5 0 auto",
  },
  cover: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    
    maxHeight: "150px",
    margin: "0 auto",
    width: "40%",
    borderRightColor: "#bfbbbb",
  },
  "empty-txt": {
    border:"1px solid red",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  controls: {
    maxWidth: "100%",
    display: "flex",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  icon: {
    justifyContent: "space-between",
    alignItems: "centre",
    float: "right",
  },
}));
export default function Article(prop) {
  const classes = useStyles();
  let x =
    prop.data.date === null &&
    prop.data.author === null &&
    prop.data.authors === null &&
    prop.data.isVid === false
      ? "none"
      : "unset";
  return (
    <article key={prop.data.id}>
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
                      variant="inherit"
                    >
                      <Breadcrumbs data={prop.data} />
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      <Box
                        fontWeight="fontWeightBold"
                        lineHeight="normal"
                        m={1}
                      >
                        <Link target="_blank" color="inherit" href={prop.data.url}>
                          {prop.data.headline}
                        </Link>
                      </Box>
                    </Typography>
                    <Typography
                    className={(prop.data.thumbnail !== null&&prop.data.lede===null) ? classes['empty-txt']: ""}
                      style={{
                        minHeight: prop.data.thumbnail === null ? "0" : "30px",
                      }}
                      variant="inherit"
                    >
                      <Box boxShadow={0} lineHeight="normal" m={1}>
                        {prop.data.lede || ""}
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="inherit"
                      color="textSecondary"
                      style={{display: x ,fontStyle:"italic", }}
                    >
                      {[
                        prop.data.tags,
                        prop.data.tag,
                        prop.data.date,
                        prop.data.authors,
                        prop.data.author,
                      ].map((y) => (
                        <Box 
                          key={`${Math.random() * 1000}`}
                          lineHeight="normal"
                          style={{
                            cursor: "auto",
                            display: y === null ? "none" : "unset",
                          }}
                          component="div"
                          display="inline"
                          p={1}
                          bgcolor="background.paper"
                        >
                          {y}
                        </Box>
                      ))}
                      <Box
                        lineHeight="normal"
                        display="inline"
                        component="div"
                        bgcolor="background.paper"
                      >
                        {prop.data.isVid === true ? (
                          <div className={classes.icon}>
                            <span
                              p={1}
                              style={{ position: "relative", top: "-5px" }}
                            >
                              {prop.data.vidLen || ""}
                            </span>
                            <Tooltip title="Video">
                              <PlayCircleFilledIcon />
                            </Tooltip>
                          </div>
                        ) : null}
                      </Box>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <CardMedia
          style={{ display: prop.data.thumbnail === null ? "none" : "" }}
          className={classes.cover}
          id="imgWrapper"
        >
          <Image
            onClick={(event) => (window.location.href = `${prop.data.url}`)}
            style={{
              width: "100%",
              margin: "0 auto",
              maxHeight: "150px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            alt={prop.data.headline}
            src={prop.data.thumbnail||''}
          />
        </CardMedia>
      </Card>
    </article>
  );
}
