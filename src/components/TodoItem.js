import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        };
    };
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={this.props.todo.completed} onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        );
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: '#FF0000',
  color: '#FFF',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'  
};

export default TodoItem;
