import React, { useState } from "react";
import TodoList from "./components/Todo/TodoList";
import NewTodo from "./components/Todo/NewTodo";
import { Todo } from "./Types/Todo.types";

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  function todoAddHandler(text: string) {
    setTodos((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text },
    ]);
  }

  function todoRemoveHandler(id: string) {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }
  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoRemoveHandler} />
    </>
  );
}

export default App;
