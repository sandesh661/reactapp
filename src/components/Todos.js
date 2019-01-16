import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
	
  render() {
    return this.props.todos.map((todobj) => (
		<Todoitem key={todobj.id} todo={todobj} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
	));
  }
}


//PropTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
}

export default Todos;
