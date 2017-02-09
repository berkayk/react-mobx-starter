import React, { Component } from 'react';
import {observer} from 'mobx-react'

@observer
export default class SingleTodoView extends Component{

    render(){
        const model = this.props.model
        const todo = this.props.todo

        return <p>
                    #{todo.id} 
                    <strong>{todo.text}</strong> 
                    <i>{todo.done ? 'DONE!' : ''}</i>
                    
                    <br/>

                    <input type="checkbox" checked={todo.done} onChange={e => todo.done = e.target.checked} />
                    <input type="text" value={todo.text} onChange={e => todo.text = e.target.value} />
                    <button onClick={() => model.remove(todo)}>Delete</button>
                </p>
    }
}