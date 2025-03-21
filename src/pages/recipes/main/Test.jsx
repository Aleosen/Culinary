import React, { useState } from 'react'

export default function Test() {
    const [state, setState] = useState({ name: '', age: 0 })
    const [inputState, setInputState] = useState('')
    const handleClick = (event, ...prev) => {
        event.preventDefault()
        const newState = {...prev}
        newState.name = inputState
        setState(newState)

    }
  return (
    <div>
      <form onSubmit={handleClick}>
        <input type='text' value={inputState} onChange={(e)=>setInputState(e.target.value)}/>
        <button type='submit'>Yes</button>
      </form>
      <span>Имя:{state.name}</span>
      <span>Возраст:{state.age}</span>
    </div>
  )
}
