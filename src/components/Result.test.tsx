import { render, screen } from '@testing-library/react';

import Result from './Result';

describe('Result message', () => {
  test('should render "You Win!"', () => {
    render(<Result score={8} />);

    const outcome = screen.getByTestId('outcome').textContent;
    expect(outcome).toEqual('You Win!');
  });

  test('should render "You Lose"', () => {
    render(<Result score={4} />);

    const outcome = screen.getByTestId('outcome').textContent;
    expect(outcome).toEqual('You Lose!');
  });
});
