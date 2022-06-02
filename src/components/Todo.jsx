import React, { Fragment, useState } from 'react'

const Todo = (props) => {
    return (
        <div>
            <div id='root'>
                <p>{props.values}</p>
                <button>삭제</button>
            </div>
        </div>
    )
}

export default Todo
