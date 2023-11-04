import {MemoryRouter} from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import {render} from "@testing-library/react";

export const renderWithRouter = (component, initialRoute = '/') => render(
    <MemoryRouter initialEntries={initialRoute}>
        <AppRouter/>
        {component}
    </MemoryRouter>
)