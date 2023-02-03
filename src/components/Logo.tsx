import { Link, Theme, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";



const Logo = () => {  return (
    <Link href="/">
      <img
        style={{ alignItems: "centre"}}
        src="https://raw.githubusercontent.com/makhosi6/my_projects_links/master/white_logo.svg"
        alt="logo"
        width="100"
        height="30"
        sizes=""
        srcSet="//raw.githubusercontent.com/makhosi6/my_projects_links/master/white_logo.svg"
      />
    </Link>
  )
}

export default Logo;


