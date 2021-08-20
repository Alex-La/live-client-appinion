import React, { Component, Fragment } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.info(errorInfo);
  }

  render() {
    if (this.state.hasError) return <Fragment />;
    return this.props.children;
  }
}

export default ErrorBoundary;
