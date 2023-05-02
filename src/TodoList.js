
import React,{Component} from "react";
import TodosItem from "./TodoItem";

class TodosList extends Component{
    render(){
        return(
            <div>
                {
                    this.props.todos.map(todo=>(
                        <TodosItem key= {todo.id} todo={todo} handleChangeProps={
                            this.props.handleChangeProps
                        }deleteTodoProps ={this.props.deleteTodoProps}/>
                    ))
                }
            </div>
        )
    }
}
export default TodosList;