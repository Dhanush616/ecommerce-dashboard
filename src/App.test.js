import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the TechStore dashboard', () => {
  render(<App />);
  expect(screen.getByText(/better tools for the way you work/i)).toBeInTheDocument();
  expect(screen.getByText(/find your next essential/i)).toBeInTheDocument();
});
