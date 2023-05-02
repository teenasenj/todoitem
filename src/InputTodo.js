import React,{Component} from "react";

class InputTodo extends Component{
    state={
        title:""

    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handlesubmit=(event)=>{
        event.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title:""
        })
    }

    render(){
        return(
            <form onSubmit={this.handlesubmit}>
                <input type="text" placeholder="eg: iam leaving to /korea" value={this.state.title}
                name="title" onChange={this.onChange}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}
export default InputTodo;