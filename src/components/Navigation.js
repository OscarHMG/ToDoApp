import React, { Component } from 'react';

class Navigation extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         lengthToDos : props.toDos.length
    //     }
    // }

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">Tasks 
                    <span className="badge badge-pill badge-light ml-2"> {this.props.tasksNum.length}</span>
                </a>


            </nav>
        );
    }
}

export default Navigation;