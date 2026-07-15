// import { Component, type ErrorInfo, type ReactNode } from "react";

import { Component, type ErrorInfo, type ReactNode } from "react";

// interface ErrorBoundaryProps {
//   children?: ReactNode;
// }

// interface ErrorBoundaryState {
//   hasError: boolean;
// }

// export class ErrorBoundary extends Component<
//   ErrorBoundaryProps,
//   ErrorBoundaryState
// > {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return {
//       hasError: true,
//     };
//   }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     console.log(error, errorInfo);
//   }

//   render(): ReactNode {
//     if (this.state.hasError) {
//       return <div>Error occurred</div>;
//     }
//     return this.props.children;
//   }
// }

type ErrorBoundaryProps = {
  children?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(prop: ErrorBoundaryProps) {
    super(prop);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <p>Error happen</p>;
    }

    return this.props.children;
  }
}
