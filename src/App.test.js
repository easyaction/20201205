import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/부부의 탄생/i);
  expect(linkElement).toBeInTheDocument();
});
