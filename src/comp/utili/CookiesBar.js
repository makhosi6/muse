import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CookieBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div   className={classes.root}>
      <Snackbar open={open} autoHideDuration={17000} onClose={handleClose}>
        <Alert id="cookie-bar" onClose={handleClose} severity="info">
        Note: This website uses cookies and this website uses cookies.
        </Alert>
      </Snackbar>
    </div>
  );
}
