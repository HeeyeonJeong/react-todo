# React-ToDo

React로 구현한 ToDo List

<br/>

![image](https://user-images.githubusercontent.com/70693728/103893555-d3492b80-5130-11eb-91b6-f27ca78b8960.png)

- [Link](https://heeyeonjeong.github.io/react-todo/)

<br/>

## ⚙ Stack

React

- styled-components
- react-icons

<br/>

## 📚 Features

### Components

- [x] TodoTemplate - 레이아웃
- [x] TodoHead - 오늘 날짜, 오늘 요일, 남은 할 일 갯수
- [x] TodoList + TodoItem
  - list 체크 클릭시, 할 일 Done
  - list 휴지통 클릭시, 할 일 제거
- [x] TodoCreate - 새로운 할일 등록
  - 버튼 클릭시 할 일 등록 form open

<br/>

### `useReducer`와 `Context API`를 사용하여 상태관리

```javascript
function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
```

<br/>

### custom Hooks

- context API를 쉽게 사용할 수 있는 커스텀 Hook
  - useTodoState
  - useTodoDispatch
  - useTodoNextId

```javascript
export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
```
