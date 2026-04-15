import { render, screen } from "@testing-library/react";
import { GetUser } from "../component/GetUser";

test('renders user details', () => {
  const user = {
    id: 1,
    name: 'swapna',
    city: 'hyd'
  };

  render(<GetUser user={user} />);

  expect(screen.getByText('UserDetails:')).toBeInTheDocument();
  expect(screen.getByText('id: 1')).toBeInTheDocument();
  expect(screen.getByText('name: swapna')).toBeInTheDocument();
  expect(screen.getByText('city: hyd')).toBeInTheDocument();
});