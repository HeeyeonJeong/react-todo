import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="LOREM TEXT" done={true} />
      <TodoItem text="LOREM TEXT" done={true} />
      <TodoItem text="LOREM TEXT" done={false} />
      <TodoItem text="LOREM TEXT" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;
