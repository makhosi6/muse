import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

type NavProps = {
  clasName:  string
  openMenu: any
};

const NavigationBtn = (props: NavProps) => {
  return (
    <>
      <div className={`muse-nav-btn ${props.clasName}`}>
        <IconButton onClick={props.openMenu} aria-label="delete">
          <MenuIcon />
        </IconButton>
      </div>
    </>
  );
};

export default NavigationBtn;
