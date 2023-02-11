import React, { KeyboardEventHandler, MouseEventHandler } from "react";
import { MobileWrapper } from "./layout/MobileWrapper";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
type Props = {
  // closeMenu: KeyboardEventHandler<HTMLElement> | MouseEventHandler<HTMLElement>;
  closeMenu: any
};

const NavMenu = (props: Props) => {
  return (
    <nav className="">
      <div className="cd-primary-nav">
      <div className="muse-nav-btn">
        <IconButton onClick={props.closeMenu} onKeyPress={props.closeMenu} aria-label="delete">
          <CloseIcon />
        </IconButton>
      </div>
          <div className="menu-content"></div>
      </div>
    </nav>
  );
};

export default NavMenu;
