import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

describe('App component', () => {
  it('should render list items', () => {
    render(<App />)

    expect(screen.getByText('Elisio')).toBeInTheDocument()
    expect(screen.getByText('Amanda')).toBeInTheDocument()
    expect(screen.getByText('Tamyris')).toBeInTheDocument()
  })

  it('should be able to add a new item when user click on add button', async () => {
    const user = userEvent.setup()

    // 1 - renderizar o component
    render(<App />)

    //achar o input pelo placeholder
    const inputElement = screen.getByPlaceholderText('Novo item')
    
    //achar o botão pelo texto
    const addButton = screen.getByText('Adicionar')

    //escrever o valor no input
    await user.type(inputElement, 'novo')

    await user.click(addButton)

    expect(await screen.findByText('novo')).toBeInTheDocument()
  })

  it('should be able to remove item when user click on remove button', async () => {
    const user = userEvent.setup()

    //renderizar o component
    render(<App />)

    //achar o botão pelo texto
    //nesse caso vai ser retornado um array
    const removeButton = screen.getAllByText('Remover')

    //clicar no botão passando a primeira posição
    await user.click(removeButton[0])

    await waitFor(() => expect(screen.queryByText('Elisio')).not.toBeInTheDocument())
  })
})