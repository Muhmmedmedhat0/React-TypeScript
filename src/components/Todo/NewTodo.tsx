import React, { useRef } from "react";
import { AddProps } from "../../Types/Todo.types";
import "./NewTodo.css";

function NewTodo(props: AddProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  function todoSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enterdText = inputRef.current!.value;
    props.onAddTodo(enterdText);
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text"></label>
        <input
          type="text"
          id="todo-text"
          ref={inputRef}
          placeholder="What needs to be done?"
        />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
}

export default NewTodo;
