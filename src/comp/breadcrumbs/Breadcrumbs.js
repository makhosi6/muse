import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
 
  console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs(prop) {

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href={prop.data.catLi} onClick={handleClick}>
        <img style={{objectFit: 'cover'}} src={prop.data.src} width="fit-content" height="20" alt="source" />
      </Link>
       <Link  color="inherit" href={prop.data.catLink} onClick={handleClick}>
       {prop.data.category}
      </Link>
    </Breadcrumbs>
  );
}
