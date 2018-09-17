import React, { Component} from 'react';


class ToDoForm extends Component{

    constructor(){
        super();
        this.state = {
            title: '',
            responsable: '',
            description: '',
            priority: 'low'
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }


    /**
     * Everytime I change the value in the input this function is called
     */

    handleInput(event){
        // const name = event.target.name;
        // const value = event.target.value;

        const {value, name} = event.target;
        this.setState({
            [name] : value
        });

    }

    /**
     * SUBMIT ACTION
     */
    handleOnSubmit(event){
        event.preventDefault();
        //ACCESS TO THE FUNCTION CREATED IN THE APP.JS THROUGH PROPS
        //PASS THE NEW TO DO TO CREATE 
        this.props.onAddToDo(this.state);
    }

    render(){
        return(
            
            <div className="card">
                <form className="card-body" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Nombre de tarea" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Descripcion" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsable" className="form-control" placeholder="Responsable" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="priority" onChange={this.handleInput}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Crear tarea</button>
                </form>
            </div>
            
        );
    }
}

export default ToDoForm;