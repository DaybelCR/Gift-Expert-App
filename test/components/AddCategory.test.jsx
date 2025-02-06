import { fireEvent, render ,screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Prueba en <AddCategory/>', () => { 
  test('Debería cambiar el valor de caja de texto', () => { 
    render(<AddCategory onNewValue={()=>{}}/>)
    // screen.debug()
    const input = screen.getByRole('textbox')
    fireEvent.input(input,{target:{value:'Saitama'}})
    
    expect(input.value).toBe('Saitama')

  })
  test('Debe llamar a onNewValue si el input tiene valor', () => { 
    const inputValue = 'Saitama'
    const onNewValue = jest.fn()

    render(<AddCategory onNewValue={onNewValue}/>)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input,{target:{value:inputValue}})
    fireEvent.submit(form)
    expect(input.value).toBe('')
    expect(onNewValue).toHaveBeenCalled()
    expect(onNewValue).toHaveBeenCalledTimes(1)
    expect(onNewValue).toHaveBeenCalledWith(inputValue)

  })
  test('No debería llamar si el onNewValue si el input está vacío', () => { 
    const onNewValue = jest.fn()
    render(<AddCategory onNewValue={onNewValue}/>)

    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(onNewValue).toHaveBeenCalledTimes(0)
    expect(onNewValue).not.toHaveBeenCalled()
   })
 })