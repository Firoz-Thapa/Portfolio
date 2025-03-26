import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the dependencies that might cause issues in testing
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
}));

jest.mock('./components/Navbar', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('./components/Pre', () => () => <div>Preloader</div>);

test('renders without crashing', () => {
  render(<App />);
  const navbarElement = screen.getByTestId('navbar');
  expect(navbarElement).toBeInTheDocument();
});