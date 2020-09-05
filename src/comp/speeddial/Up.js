import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


export default function Up() {
    const scrollUp = () => {
    console.trace('scrollUp')
  }
    return (
        <div style={{border: '1px solid', width: '60px',height:'60px', position:'absolute', right : "20px", bottom: "100" }} >
        <SpeedDial onClick={scrollUp} icon={ <ExpandLessIcon/>} ariaLabel="up btn">
        </SpeedDial>
        </div>
    )
}

