import { render, screen } from "@testing-library/react";
import {HelloComponent} from "../component/HelloComponent"

test('render given name', ()=>{
    render(<HelloComponent name="Swapna"></HelloComponent>)
    expect(screen.getByText('Swapna')).toBeInTheDocument();
})

//npm test Hello.test.js