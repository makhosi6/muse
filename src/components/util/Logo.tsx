import { Link, Theme, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../assets/images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";

const Logo = () => {
  return (
    <Link href="/">
      <img
        style={{ alignItems: "centre" }}
        src={logo}
        alt="muse logo"
        width="85"
        height="25"
        sizes=""
        srcSet={logo}
      />
    </Link>
  );
};

export default Logo;