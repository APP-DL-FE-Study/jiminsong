import React, { Fragment, useState } from 'react'

const Todo = (props) => {
    return (
        <div>
            <div id='root'>
                <span>{props.item.text}</span>
                <button onClick={() => props.delete(props.item.id)}>
                    삭제
                </button>
            </div>
        </div>
    )
}

export default Todo
