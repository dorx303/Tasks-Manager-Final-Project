import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App.jsx';

it('clears completed tasks when Clear completed is clicked', async () => {
  render(<App />);
  const user = userEvent.setup();

  const input = screen.getByPlaceholderText(/add a new task/i);
  await user.type(input, 'task one');
  await user.keyboard('{Enter}');

  await user.type(input, 'task two');
  await user.keyboard('{Enter}');

  // toggle first task
  const checkboxes = await screen.findAllByRole('checkbox');
  await user.click(checkboxes[0]);

  const clearBtn = screen.getByText(/clear completed/i);
  await user.click(clearBtn);

  // only one task should remain
  const items = await screen.findAllByRole('listitem');
  expect(items.length).toBe(1);
});
