import React from "react";
import Drawer from "@material-ui/core/Drawer";
import SearchIcon from "@material-ui/icons/Search";
import SearchAppBar from "./SearchInputBar";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor ='top', open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
  if(open !== null || open !== undefined)  setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment key="top">
        <SearchIcon onClick={toggleDrawer("top", true)} />
        <Drawer
          anchor="top"
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          <SearchAppBar />
        </Drawer>
      </React.Fragment>
    </div>
  );
}