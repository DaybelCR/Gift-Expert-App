import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Prueba en GifItem', () => {
  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'
  test('Debe ser match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })
  test('debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    //screen.debug()
    //expect(screen.getByRole('img').src).toBe(url)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(alt)
  })
  test('Debe mostrar el título en el componente', () => {
  render(<GifItem title={title} url={url}/>)
  expect(screen.getAllByText(title)).toBeTruthy()
  })
})