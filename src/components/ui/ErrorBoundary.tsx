"use client";

import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-screen gap-4 px-4" role="alert">
          <p className="text-xl font-bold text-text-primary">出了點問題</p>
          <p className="text-sm text-text-muted text-center">
            {this.state.error?.message || "發生未知錯誤"}
          </p>
          <button
            onClick={this.handleRetry}
            className="px-6 py-3 bg-accent text-white rounded-xl font-medium text-sm"
          >
            重試
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
