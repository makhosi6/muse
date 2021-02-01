import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "material-ui-image";

export default function MediaCard(prop) {
  return (
    <div>
      <CardMedia id="imgWrapper">
        <Image
          onClick={(event) => (window.location.href = `${prop.url}`)}
          style={{
            width: "100%",
            margin: "0 auto",
            maxHeight: "150px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          src={prop.src}
        />
      </CardMedia>
    </div>
  );
}
