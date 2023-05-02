import React ,{Component}from "react";

class Header extends Component{
    componentDidUpdate(prevProps){
        var red=Math.floor(Math.random()*256);
        var green=Math.floor(Math.random()*256);
        var blue=Math.floor(Math.random()*256);


        var bgColor=`rgb(${red},${green},${blue})`;
        if(prevProps.headerspan !==this.props.headerSpan){
            document.getElementById("inHd").innerHTML='user changed the checkbox';
            document.getElementById("inHd").style.backgroundColor=bgColor;


        }

    }
     render(){
        const headerstyle={
            padding: "10px 0",
            lineHeight:"2rem"
        }
        return(
            <header style={headerstyle}>
             <h1 style={{fontSize:"25px",marginBottom:"15px"}}>Todo App
             <span id="inHd"></span></h1>
             <p style={{fontSize:"18px"}}>Fetching the list of todos, Adding new items, changing the 
             existing items and deleting the items</p>
            </header>
        )
    }
}
export default Header;