import {createReduxStore} from "../../store/store";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";

export const renderWithRedux = (component, initialState) => render(
    <Provider store={createReduxStore(initialState)}>
        {component}
    </Provider>
)