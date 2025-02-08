import { render, screen, fireEvent } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('Pruebas en componente <GiftExpertApp/>', () => {
  //Pruebas en onAddCategory
  test('Debe ser match con el snapshot', () => {
    const { container } = render(<GiftExpertApp />)
    expect(container).toMatchSnapshot()
  })
  test('Debe renderizar la categoría inicial', () => {
    render(<GiftExpertApp />)
    // screen.debug()
    expect(screen.getAllByText("One Punch")).toBeTruthy()
  })
  test('Debe agregar una nueva categoría', () => {
    const inputValue = 'Saitama'
    render(<GiftExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    expect(screen.getAllByText(inputValue)).toBeTruthy()
    const category = screen.getAllByRole('heading', { level: 3 })
    expect(category.length).toBeGreaterThan(1)
  })
  test('No debe agregar una categoría duplicada', () => {
    const inputValue = "One Punch"
    render(<GiftExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)

    const items = screen.getAllByText('One Punch')
    expect(items.length).toBe(1)
  })
})