import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

describe('NAVBAR TEST', () => {
    test('testing main link', async () => {
        renderWithRouter(<Navbar/>)
        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('testing about link', async () => {
        renderWithRouter(<Navbar/>)
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })

    test('testing users link', async () => {
        renderWithRouter(<Navbar/>)
        const usersLink = screen.getByTestId('users-link')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })
})