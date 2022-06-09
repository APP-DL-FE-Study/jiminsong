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
            id: Date.now(),
            text: inputRef.current.value,
        }
        const text = inputRef.current.value
        if (text === '') {
            return
        } else {
            setTodo([...todo, newTodo])
            setInputText('')
            inputRef.current.value = ''
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInputText(e.target.value)
    }

    const handleDelete = (id) => {
        const newArr = todo.filter((a) => {
            return a.id !== id
        })

        setTodo(newArr)
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
                {todo.map((item, index) => (
                    <Todo key={index} item={item} delete={handleDelete} />
                ))}
            </div>
        </>
    )
}

export default Content
