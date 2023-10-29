import React from "react";

interface TodosProps {
    todos: string[];
    addTodo: () => void;
  }

export const Todos: React.FC<TodosProps> = React.memo(({ todos, addTodo }) => {
    return (
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
});