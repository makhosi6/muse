import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  MouseEvent,
} from "react";
import { MobileWrapper } from "../layout/MobileWrapper";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { MenuGrid } from "./MenuGrid";
type Props = {
  // closeMenu: KeyboardEventHandler<HTMLElement> | MouseEventHandler<HTMLElement>;
  closeMenu: any;
};

const NavMenu = (props: Props) => {
  function absorb(event: any): void {
    console.log(event);
    event.preventDefault();
  }

  return (
    <nav>
      <div onScroll={absorb} className="cd-primary-nav">
        <div className="muse-nav-btn">
          <IconButton
            onClick={props.closeMenu}
            onKeyPress={props.closeMenu}
            aria-label="delete"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="menu-content">
         <MenuGrid/>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
