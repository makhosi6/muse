import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {};

const NavigationBtn = (props: Props) => {
  return (
    <>
      <div className="muse-nav-btn">
        <IconButton aria-label="delete">
          <MenuIcon />
        </IconButton>
      </div>
    </>
  );
};

export default NavigationBtn;
