import { render, screen, fireEvent } from '@testing-library/react';
import Row from './components/Row';

test('click changes row to highlighted', () => {
  render(<Row />);
  const title = screen.getby("click me");
  fireEvent.click(unselectedRow);
  expect(title).toHaveClass("highlighted");
});
