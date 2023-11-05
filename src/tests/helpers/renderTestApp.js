import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import AppRouter from "../../router/AppRouter";
import {MemoryRouter} from "react-router-dom";

export const renderTestApp = (component, options) => render(
    <Provider store={createReduxStore(options?.initialState)}>
        <MemoryRouter initialEntries={options?.route}>
            <AppRouter/>
            {component}
        </MemoryRouter>
    </Provider>
)