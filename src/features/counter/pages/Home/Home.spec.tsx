import { render, screen } from '@/helpers/test-helper';

import Counter from '.';

describe('<Counter />', () => {
  it('should render the heading', () => {
    const { container } = render(<Counter />);

    expect(
      screen.getByRole('heading', { name: /Counter/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
