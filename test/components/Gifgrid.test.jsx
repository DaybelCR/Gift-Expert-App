import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")

describe('Pruebas en <GifGrid/>', () => {
  const category = 'One Punch'
  test('Debe de mostrar el loading inicial', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  })
  test('Debe mostrar items cuando se carga las imágenes useFetchGifts', () => {
    const gifs = [{
      id: "ABC",
      title: "Saitama",
      url: "https://localhost/saitama.jpg",
    },
    {
      id: "123",
      title: "One punch",
      url: "https://localhost/onepunch.jpg",
    }]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })
    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})