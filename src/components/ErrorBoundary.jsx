import { ErrorBoundary as Boundary } from 'react-error-boundary';

const ErrorFallback = ({ resetErrorBoundary }) => (
  <main className="error-fallback">
    <p className="eyebrow">Something went wrong</p>
    <h1>TechStore needs a refresh.</h1>
    <button className="checkout-button" onClick={resetErrorBoundary}>Try again</button>
  </main>
);

const ErrorBoundary = ({ children }) => (
  <Boundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
    {children}
  </Boundary>
);

export default ErrorBoundary;
