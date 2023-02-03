import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {};

const NavigationBtn = (props: Props) => {
  return (
    <>

    <div className="muse-nav-btn">
      {/* <div className="muse-nav-btn-outter">
        <div className="muse-nav-btn-inner">
        <MenuIcon className="menu-btn-two" />        

        </div>
      </div> */}
      <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
    </div>
    </>

  );
};

export default NavigationBtn;
