import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export default function Modal(prop) {

  return (
    <>
      <Dialog
         open={prop.open}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Title</DialogTitle>
        <DialogContent dividers={prop.scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={prop.descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={prop.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={prop.handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
