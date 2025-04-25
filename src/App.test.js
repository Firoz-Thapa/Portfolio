import { render, screen } from '@testing-library/react';
import App from './App';
// Mock dependencies BEFORE importing anything
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div data-testid="browser-router">{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Route: ({ path, element }) => <div data-testid={`route-${path}`}>{element}</div>,
  Navigate: () => <div data-testid="navigate" />,
  Link: ({ children, to }) => <a data-testid={`link-${to}`} href={to}>{children}</a>,
  useLocation: () => ({
    pathname: '/test-path'
  })
}));

// Mock your components
jest.mock('./components/Pre', () => ({ load }) => (
  <div data-testid="preloader" id={load ? "preloader" : "preloader-none"}></div>
));

jest.mock('./components/Navbar', () => () => <div data-testid="navbar">Navbar</div>);
jest.mock('./components/ScrollToTop', () => () => <div data-testid="scroll-to-top">ScrollToTop</div>);
jest.mock('./components/Home/Home', () => () => <div data-testid="home">Home</div>);
jest.mock('./components/Projects/Projects', () => () => <div data-testid="projects">Projects</div>);
jest.mock('./components/About/About', () => () => <div data-testid="about">About</div>);
jest.mock('./components/Resume/ResumeNew', () => () => <div data-testid="resume">Resume</div>);
jest.mock('./components/Footer', () => () => <div data-testid="footer">Footer</div>);

// Actual test starts here


describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    
    // Check if major components are rendered
    expect(screen.getByTestId('browser-router')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});