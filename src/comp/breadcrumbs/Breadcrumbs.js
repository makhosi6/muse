import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
 
}

export default function SimpleBreadcrumbs(prop) {

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" target="_blank" href={prop.data.src_url} onClick={handleClick}>
        <img style={{objectFit: 'cover'}} src={prop.data.src_logo} width="fit-content" height="12" alt={prop.data.src_name} />
      </Link>
       <Link style={{textTransform: "capitalize"}} color="inherit" target="_blank" href={prop.data.catLink||prop.data.src_url} onClick={handleClick}>
       {prop.data.tag||prop.data.category||prop.data.src_name}
      </Link>
    </Breadcrumbs>
  );
}
