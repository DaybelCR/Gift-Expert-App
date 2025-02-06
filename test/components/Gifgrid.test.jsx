import { render } from "@testing-library/react"
import { GifGrid } from "../../src/components"

describe('Pruebas en <GifGrid/>', () => { 
  const category = 'One Punch'
  test('Debe de mostrar el loading inicial', () => { 
      render(<GifGrid category={category}/>)
      expect(screen.getByText('Cargando ...'))
      expect(screen.getByText(category))
   })
  test('Debe mostrar items cuando se carga completamente', () => { 
    
   })
 })