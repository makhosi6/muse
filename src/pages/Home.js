import React from "react";
import { MyContext } from "../context";
import Trends from "../comp/trends/Trends";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CookieBar from "../comp/utili/CookiesBar";
import Presentation from "../comp/presentation/Presentation";

const useStyles = makeStyles(theme => ({
  head: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700,
    textTransform: "capitalize",
    textDecoration: "underline"
  },
  cont: {
    margin: "auto",
    maxWidth: 700,
    height: "100%"
  }
}));

export default function ContainerBlock() {
  const classes = useStyles();
 
  return (
    <MyContext.Consumer>
      {context => (
        <main>
          <CssBaseline />
          <Container
            className={classes.cont}
          >
            <Trends data={context.trends} />
            <div>
              <Presentation
                data={context.arr.sort(() => Math.random() - 0.5)}
              />
            <CookieBar />
            </div>{" "}
          </Container>{" "}
        </main>
      )}
    </MyContext.Consumer>
  );
}



