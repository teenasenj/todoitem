import React, { Component } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodoList";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';


class TodoContainer extends Component{
    state={
        todos:[],
        show: false,

    }

       componentDidMount(){
        axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(response=>this.setState({
            todos:response.data
        }))
    }
        addTodoItem=title =>{
        const newTodo={
            id:uuidv4(),
            title:title,
            completed:false
        }

        this.setState({
        todos:[
        ...this.state.todos, newTodo]

        })
    }
    
    handleChange=id=>{
    this.setState({
    todos:this.state.todos.map(todo=>{
    // if(todo.id==id){
    // todo.completed==!todo.completed
    // }

    if(todo.id===id){
        todo.completed=!todo.completed
      }

    return todo;
     }),
    show:!this.state.show
    })
    }

    delTodo=id=>{
        this.setState({
            todos:[
                ...this.state.todos.filter(todo=>{
                    return todo.id!==id
                })
            ]
        })
    }
render(){
    return(
        <div>
        <Header  headerspan={ this.state.show}/>
        <InputTodo addTodoProps={this.addTodoItem}/>
        <TodosList todos ={this.state.todos}handleChangeProps={this.handleChange} deleteTodoProps=
        {this.delTodo}/>
        </div>
    )
}
}

export default TodoContainer;