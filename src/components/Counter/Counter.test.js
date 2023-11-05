import userEvent from "@testing-library/user-event";
import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Testing Counter component', () => {
    test('Increment click', async () => {
        const {getByTestId} = renderTestApp(null, {
            route: '/',
            initialState: {
                counter: { value: 10 }
            }
        })
        const incrementBtn = getByTestId('increment-btn')

        expect(getByTestId('value-title')).toHaveTextContent('10')
        userEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('11')
    })
})