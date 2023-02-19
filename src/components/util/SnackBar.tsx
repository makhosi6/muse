import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";
import { TransitionProps } from "@material-ui/core/transitions";
import { type } from "os";
import { Alert } from "@material-ui/lab";

function SlideTransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function SlideTransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

type Props = {
  shouldOpen: boolean;
};

export default function NoInternetSnackbar(props: Props) {
  const [state, setState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & { children?: React.ReactElement<any, any> }
    >;
  }>({
    open: false,
    Transition: Fade,
  });


  useEffect(() => {
    window.addEventListener("online", (_: any) => {
      if (state.open) {
        setState({
          open: false,
          Transition: SlideTransitionDown,
        });
      }
      setTimeout(() => window.location.reload(), 2000);
    });
    window.addEventListener("offline", (_: any) => {

      if (!state.open) {
        setState({
          open: true,
          Transition: SlideTransitionUp,
        });
      }
    });

    return () => {
      window.removeEventListener("online", console.warn);

      window.removeEventListener("offline", console.warn);
    };
  }, []);

  if (props.shouldOpen && state.open === false) {
    setState({
      open: true,
      Transition: SlideTransitionUp,
    });
  }

  return (
    <div>
      <Snackbar
        open={state.open}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
      >
        <Alert style={{ backgroundColor: "#ed2939" }} severity="error">
          No Internet Connection! Make sure that WiFi or mobile data is on.
        </Alert>
      </Snackbar>
    </div>
  );
}
