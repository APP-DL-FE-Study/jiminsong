import React, { Fragment, useRef, useState } from 'react'
import './content.css'
import Todo from './Todo'

const Content = () => {
    const [temp, setTemp] = useState(0)
    const [inputText, setInputText] = useState('')
    const [todo, setTodo] = useState([])

    const inputRef = useRef()
    const handleClick = () => {
        const newTodo = {
            id: Date.now,
            text: inputRef.current.value,
        }
        setTodo([...todo, newTodo])
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    return (
        <>
            <h1>Content</h1>
            <div>
                <input
                    ref={inputRef}
                    type='text'
                    onChange={handleChange}
                ></input>
                <button onClick={handleClick}>추가</button>
                <p>{inputText}</p>
                {todo.map((value, index) => (
                    <Todo key={index} values={value.text} />
                ))}
            </div>
        </>
    )
}

export default Content
