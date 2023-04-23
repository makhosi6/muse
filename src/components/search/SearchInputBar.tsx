import React, { Consumer, Context, KeyboardEvent, useContext } from "react";
import { alpha as fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MyContext from "../../context";
import { hashCode, wordLimiter } from "../util/helpers";
import { ArticlesContext, TopicsContext } from "../../App";
import { Box, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  middle: {
    margin: "auto",
    maxWidth: 300,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: "0",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "red",
    borderRadius: "0",
  },
  inputInput: {
    color: "primary",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

type Props = {};

export default function SearchInput(props: Props) {
  const classes = useStyles();

  const articles = useContext(ArticlesContext);
  return (
    // <MyContext.Consumer>
    //   {(context: any) => (
    <React.Fragment>
      <div className={classes.middle}>
        <Autocomplete
          className={classes.middle}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={articles.map((art) => art.headline)}
          renderInput={(params) => (
            <TextField
              onSelect={(event: any) => {
                console.log({ event });

                if (event.target.value !== "") {
                  const obj = articles.filter(
                    (opt) => opt.headline === event.target.value
                  );
                  if (obj[0] !== undefined) {
                    //@ts-ignore
                    window.open(`${obj[0].url}`);
                  }
                }
              }}
              autoFocus
              {...params}
              label="Search"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
          /**
           * props - article id
           */
          renderOption={(props, option) => {
            ///article
            const { thumbnail, headline, id } = articles.filter(
              (art) => art.headline === props
            )[0];
            console.log({ props, option, thumbnail });
            return (
              <div
                style={{ listStyle: "none" }}
                key={id}
                className="muse-search-list-item"
              >
                <Grid
                  container
                  alignItems="flex-start"
                  justifyContent="space-between"
                >
                  {thumbnail !== "" && thumbnail !== null ? (
                    <Grid item style={{ width: "45px", height: "45px" }}>
                      <img
                        src={thumbnail}
                        width={45}
                        height={45}
                        alt="thumbnail"
                      />
                    </Grid>
                  ) : null}
                  <Grid
                    item
                    style={{
                      width: "calc(100% - 50px)",
                      wordWrap: "break-word",
                    }}
                  >
                    {
                      <div
                        className="muse-search-list-item-title"
                        style={{
                          border: "1px solid red",
                          overflowY: 'hidden',
                          overscrollBehavior:"none",
                          height: "50px",
                          maxHeight: "50px",
                          // lineHeight: "normal",
                          width: "100%",
                          maxWidth: "100%",
                        }}
                      >
                        <Typography
                          variant="inherit"
                          style={{
                            fontSize: "14px",
                            width: "100%",
                            fontWeight: 'bolder',
                          }}
                        >
                          {thumbnail !== "" && thumbnail !== null
                            ? wordLimiter(headline)
                            : headline}
                        </Typography>
                      </div>
                    }
                    <Typography
                      variant="caption"
                      style={{ height: "30px", color: "lightgray" }}
                    >
                      {"eNCA"}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            );
          }}
        />
      </div>
    </React.Fragment>
    //   )}
    // </MyContext.Consumer>
  );
}
