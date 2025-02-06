import { getGifs } from "../../src/helpers/getGif"

describe('Pruebas en getGif()', () => {
  test('debe de retornar un arreglo de gifs', async() => { 
    const gifs= await getGifs('One Punch')
    expect(gifs.length).toBeGreaterThan(0)
  })
 })