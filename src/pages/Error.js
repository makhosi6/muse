import React from "react";
// import {  MyContext } from "../context";
import Button from '@material-ui/core/Button';

export default class ErrorBoundary extends React.Component {

  render() {
   
      return (
         <div style={{ width: "100%",height: "90vh", textAlign: "center", alignItems: "center"}}>
          <h1> 404</h1>
           <p><b>Message:</b> Page not found</p>
         
          <Button variant="outlined">
          <a style={{textDecoration:"none", color:'#4f4f4f'}} className="btn" href="/">Home</a>
          </Button>

        </div>
      );
    }
 
}
