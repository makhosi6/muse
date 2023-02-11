import React, { Consumer, Context } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import  MyContext  from "../../context";

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
    borderRadius: theme.shape.borderRadius,
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
    color: "white",
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

type Props = {}

export default function SearchInput(props: Props) {
  const classes = useStyles();

  const fn = () :Array<unknown> =>  ['zero','one', 'two'];
  return (
    <MyContext.Consumer>
      {(context: any) => (
        <React.Fragment>
          <div className={classes.middle}>
            <Autocomplete
              className={classes.middle}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={fn()}
              renderInput={(params) => (
                <TextField
                  onSelect={(event) => {
                    // if (event.target.value !== "") {
                    //   const obj = context.search.filter(
                    //     (opt) => opt.headline === event.target.value
                    //   );
                    //   if (obj[0] !== undefined) {
                    //     window.location.assign(`${obj[0].url}`);
                    //     // window.open(`${obj[0].url}`);
                    //   //  props.changes("top", false)
                    //   }
                    // }
                  }}
                  autoFocus
                  {...params}
                  label="Search"
                  margin="normal"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
          </div>
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
}