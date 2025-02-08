import { renderHook , waitFor} from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Prueba en hook useFetchGifs', () => {
  test('Debo de regresar al estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { images, isLoading } = result.current
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })
  test('Debo de regresar un arreglo de imágenes y isloading en false', async() => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    
    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0)
      expect(result.current.isLoading).toBeFalsy()
    })

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})