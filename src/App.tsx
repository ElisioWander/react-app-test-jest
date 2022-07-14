import { useState } from "react"

const listName = [
  {name: 'Elisio'},
  {name: 'Amanda'},
  {name: 'Tamyris'},
]

function App() {
  const [newItem, setNewItem] = useState('')
  const [list, setList] = useState(listName)

  function handleAddNameToList() {
    setTimeout(() => {
      setList(state => [...state, {name: newItem}])
    }, 500)
  }

  function handleRemoveNameFromList(name: string) {
    setTimeout(() => {
      setList(list.filter(person => person.name !== name))
    }, 500)
  }

  return (
    <div>
      <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Novo item" />
      <ul>
        { list?.map(list => (
          <li key={list.name} >{list.name}
          <button onClick={() => handleRemoveNameFromList(list.name)} >Remover</button>
          </li>
        )) }
      </ul>

      <button onClick={handleAddNameToList} >Adicionar</button>
    </div>
  )
}

export default App
