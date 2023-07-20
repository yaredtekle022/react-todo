import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

export default TodosList;

TodosList.propTypes = { todosProps: PropTypes.func.isRequired };
TodosList.propTypes = { delTodo: PropTypes.func.isRequired };
