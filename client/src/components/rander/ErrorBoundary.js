import React from "react";

class ErrorBoundary extends React.Component {
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
    if (this.state.hasError) return <React.Fragment />;
    return this.props.children;
  }
}

export default ErrorBoundary;
