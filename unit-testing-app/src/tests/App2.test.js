import { screen, render } from "@testing-library/dom";
import App from "../App";

test('checks Hello Component is rendered in App',()=> {
    render(<App />)
    expect(screen.getByText("Welcome")).toBeInTheDocument();
})