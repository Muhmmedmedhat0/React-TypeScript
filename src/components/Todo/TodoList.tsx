import React from "react";
import { TodoListProps } from "../../Types/Todo.types";
import "./TodoList.css";

function TodoList(props: TodoListProps): JSX.Element {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={props.onDeleteTodo?.bind(null, item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
