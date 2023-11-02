import { render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  test('renders hello world text', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('renders hello world text', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
  });
})