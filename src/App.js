import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import Data.json
import {toDos} from './task.json';
//Import components
import Navigation from './components/Navigation';
import ToDoCard from './components/ToDoCard';
import ToDoForm from './components/ToDoForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			//todos: todos == todos (Same)
			toDos
		};

		this.handleAddToDo = this.handleAddToDo.bind(this);
		this.handleDeleteToDo = this.handleDeleteToDo.bind(this);

	}

	
	handleAddToDo(toDo){
		//SET ID, USING THE SIZE OF THE ARRAY
		toDo.id = this.state.toDos.length + 100;
		this.setState({
			toDos : [... this.state.toDos, toDo]
		});
	}

	handleDeleteToDo(id){

		if(window.confirm('Deseas eliminar esta tarea?')){
			this.setState({
				toDos : this.state.toDos.filter((element)=>{
					return element.id !== id;
				})
			});
		}
		
	}
	

	render() {
		//Initialiazte the data (Simulate server request)
		const data = this.state.toDos.map((item) =>{
			return(
				<ToDoCard toDoData={item}  onRemoveToDo={this.handleDeleteToDo}/>
			);
		})

		//RETURN HTML 
		return (

			<div className="App">
				<Navigation tasksNum={this.state.toDos}/>
				<div className="container">
					<div className="row mt-4 mb-4">
						<div className="col-md-3">
							<img src={logo} className="App-logo mb-4" alt="logo" />
							<ToDoForm onAddToDo={this.handleAddToDo} />
						</div>
						<div className="col-md-9">
							<div className="row">{data}</div>
						</div>
					</div>
				</div>
        	</div>
		);
	}
}

export default App;
