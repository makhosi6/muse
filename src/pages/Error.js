import React from "react";
// import {  MyContext } from "../context";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
        <h1>404<br/>Error occurred!</h1>
        </>
      );
    }
    return this.props.children;
  }
}
