import React, { Component, ErrorInfo, ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full bg-card rounded-xl p-8 border border-gray-800 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </motion.div>

            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-400 mb-6">
              We encountered an unexpected error. This has been logged and we'll look into it.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-400">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-3 bg-background rounded border border-gray-700 text-xs font-mono text-red-400 overflow-auto max-h-32">
                  <div className="mb-2 font-bold">{this.state.error.name}: {this.state.error.message}</div>
                  <div className="whitespace-pre-wrap">{this.state.error.stack}</div>
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                onClick={this.handleReload}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </motion.button>
              
              <motion.button
                onClick={this.handleGoHome}
                className="flex-1 flex items-center justify-center gap-2 bg-background hover:bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-4 h-4" />
                Go Home
              </motion.button>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export function useErrorHandler() {
  return (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by handler:', error, errorInfo);
    // You could send this to an error reporting service
  };
}

// Simple error fallback component
export function ErrorFallback({ 
  error, 
  resetError 
}: { 
  error: Error; 
  resetError: () => void;
}) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2">
          Something went wrong
        </h2>
        
        <p className="text-gray-400 mb-4">
          {error.message || "An unexpected error occurred"}
        </p>
        
        <button
          onClick={resetError}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

// Network error component
export function NetworkError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="min-h-[300px] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-yellow-400" />
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2">
          Connection Error
        </h2>
        
        <p className="text-gray-400 mb-4">
          Unable to connect to the server. Please check your internet connection and try again.
        </p>
        
        <button
          onClick={onRetry}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 mx-auto"
        >
          <RefreshCw className="w-4 h-4" />
          Retry
        </button>
      </div>
    </div>
  );
}