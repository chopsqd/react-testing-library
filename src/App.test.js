import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  // findBy -> для работы с асинхронным кодом 
  // getBy -> убеждаемся, что элемент есть
  // queryBy -> убеждаемся, что элемента нет
  test('renders hello world text', () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('async data render', async () => {
    render(<App />);
    const data = await screen.findByText(/data/i);
    expect(data).toBeInTheDocument()
    expect(data).toHaveStyle({color: 'red'})
  });

  test('click event', async () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  });

  test('input event', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // Искусственное событие
    // fireEvent.input(input, {
    //   target: {
    //     value: '123'
    //   }
    // })
    // Эмуляция пользовательского события
    userEvent.type(input, '123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123')
  });
})