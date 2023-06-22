import { render, screen, fireEvent } from '@testing-library/react';
import Row from './components/Row';

test('click', () => {
  render(<Row />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
