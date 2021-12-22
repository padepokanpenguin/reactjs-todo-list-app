import React, {} from 'react';
import Todo from './Todo';

const todolist = (props) => {
	return(
	<div className="todo-container">
		<ul className="todo-list">
			{props.filteredTodos.map((todo) => (
				<Todo todos={props.todos} setTodos={props.setTodos} todo={todo} key={todo.id} text={todo.text}/>
				))}
		</ul>
	</div>

	)
}

export default todolist;