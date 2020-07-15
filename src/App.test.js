import { render } from "@testing-library/svelte";
import App from "./App";

test("renders learn svelte link", () => {
  const { getByText } = render(App);
  const linkElement = getByText(/Expense Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
