import React, {Component} from 'react';



class ToDoCard extends Component{

    constructor(props){
        super(props);

        this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    }

    handleDeleteToDo(){
        this.props.onRemoveToDo(this.props.toDoData.id);
    }


    render(){
        return(
            <div  className="col-md-4 mt-4" key={this.props.toDoData.id}>
                <div className="card">
                    <div className="card-header">
                        <h3>{this.props.toDoData.title} {this.props.toDoData.id}</h3>
                        <span className="badge badge-pill badge-danger ml-2">{this.props.toDoData.priority}</span>
                    </div>
                    <div className="card-body">
                        <p>{this.props.toDoData.description}</p>
                        <p><mark>{this.props.toDoData.responsable}</mark></p>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-danger" onClick={this.handleDeleteToDo}>Eliminar tarea</button>
                    </div>
                    
                </div>
            </div>


        );
    }
}

export default ToDoCard;