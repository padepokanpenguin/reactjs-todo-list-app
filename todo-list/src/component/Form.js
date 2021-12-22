import React from 'react';

const form = (props) => {
	const inputTextHandler = (event) => {
		props.setInputUser(event.target.value);
	}
	const submitTodoListHandler = (event) => {
		event.preventDefault();
		props.setTodos([
			...props.todos,
			{text: props.inputText, completed: false, id: Math.random() * 100}]);
		props.setInputUser("");
	}
	const statusHandler = (e) => {
		props.setStatus(e.target.value);
	}
	return (
		<div>
			<form>
				<input value={props.inputText} type="text" onChange={inputTextHandler} className="input-todo"/>
				<button onClick={submitTodoListHandler} className="button-todo" type="submit">
					<i className="fas fa-plus-square"></i>
				</button>
				<div className="select">
					<select onClick={statusHandler} name="todos" className="filter-todos">
						<option value="all">All</option>
						<option value="completed">Completed</option>
						<option value="uncompleted">Uncompleted</option>
					</select>
				</div>
			</form>
		</div>
		)
}

export default form;