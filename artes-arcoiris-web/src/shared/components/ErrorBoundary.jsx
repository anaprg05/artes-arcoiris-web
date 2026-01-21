import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error atrapado por ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-center text-xl text-red-600">
          Ocurrió un error inesperado 😬
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
