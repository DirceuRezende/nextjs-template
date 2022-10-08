import { render, screen } from '@/helpers/test-helper';

import Counter from '.';

describe('<Counter />', () => {
  it('should render the heading', () => {
    const { container } = render(<Counter />);

    expect(screen.getByRole('link', { name: /Go Home/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
