import React from "react";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

export default function VidIcon(prop) {
  return (
<>
      <Box
        lineHeight="normal"
        style={{ cursor: "auto" }}
        display="inline"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        {prop.isVid === true ? (
          <Tooltip title="Video">
            <PlayCircleFilledIcon style={{ float: "right" }} />
          </Tooltip>
        ) : null}
      </Box>
    </>
  );
}
