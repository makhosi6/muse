import React from "react";
import Drawer from "@material-ui/core/Drawer";
import SearchIcon from "@material-ui/icons/Search";
import SearchAppBar from "../search/SearchInputBar";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
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
          <SearchAppBar changes={toggleDrawer}/>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
