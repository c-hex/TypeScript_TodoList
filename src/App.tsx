import React, { useEffect, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import "./App.css";
import {
  Button,
  Container,
  Input,
  List,
  Remove,
  RowBox,
  Title,
  Todo,
} from "./App.styled";

interface Todo {
    id: number;
    name: string;
}

function App() {
  // todolist data를 저장하는 state
  const [todos, setTodos] = useState<Todo[]>([]);

  // todo를 추가하기 위해 적는 내용을 담는 state
  const [todoNames, setTodoNames] = useState<string>("");

  // 현재 수정중인 todo의 id를 담는 state
  const [editId, setEditId] = useState<number | undefined>();

  // 수정 버튼을 누른 뒤 나온 input의 값을 수정하는데 써야하기 때문에 state에 담아 놓는다
  const [editName, setEditName] = useState<string>('')

  // todoName state를 input의 inChange에서 setState 해주는 함수
  const handleInputChange = ({target: { value }}: ChangeEvent<HTMLInputElement>) => {
    setTodoNames(value);
  };

  
  // todo를 추가해주는 함수
  const addTodo = () => {
    // todoName이 빈 값이면 추가하지 않음(이후 코드 실행x)
    if (!todoNames.trim()) return;

    // localStorage에서 count를 +1 해줌(id로 사용하기 위해)
    const count = Number(localStorage.getItem('count')) + 1;
    localStorage.setItem('count', `${count}`)

    // todos에 새로운 todo 추가
    setTodos((prevState) => [...prevState,{ id: prevState.length, name: todoNames },]);

    // todoName 비워줌(굳이 안 비워도 됨)
    setTodoNames("");
  };

  // todos를 초기화해주는 함수(state, localStorage)
  const resetTodos = () => {
    setTodos([]);
    localStorage.setItem('count', '0');
  }

  // todo를 만드는 input에서 enter를 눌렀을 때 todo를 추가해주는 함수
  const handlePressEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") addTodo();
  };

  // 수정할 todo의 내용을 input의 onChange에서 setState 해주는 함수
  const handleEditName = ({target: { value }}: ChangeEvent<HTMLInputElement>) => {
    setEditName(value);
  }

  // 컴포넌트(페이지)가 "처음" 렌더링 됐을 때 localStorage의 todos를 state에 넣어줌
  useEffect(() => {
    // JSON.~ 함수는 에러가 나면 그냥 터져버리기 때문에 try/catch로 감싸줌
    try {
      const parseData = JSON.parse(localStorage.getItem("todos") || "");
      setTodos(parseData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // state todos가 변화될 때(추가, 삭제) localStorage에도 저장해줌
  useEffect(() => {localStorage.setItem("todos", JSON.stringify(todos));}, [todos]);

  return (
    <Container>
      <Title>TodoList</Title>
      <RowBox>
        <Input
          placeholder="Todo를 입력해주세요 "
          onChange={handleInputChange}
          value={todoNames}
          onKeyUp={handlePressEnter}
        />
        <Button onClick={addTodo}>Button</Button>

      </RowBox>
      <List>
        {todos.map(({ id, name }) => {
          const isEdit: boolean = editId === id;

          const deleteTodo = () => {setTodos(prevState => prevState.filter(v => v.id !== id));}

          const toggleEditTodo = () => {
            setEditName(name);
            setEditId(isEdit ? undefined:id);
          }
          const editTodo = () => {
            setTodos(prevState => 
              prevState.map(todo => (todo.id === id ? {...todo, name: editName} : todo)),
            );
            toggleEditTodo();
          }
          
          return (
            <Todo key={id}>
              {/* {id + 1}. &nbsp;{name} */}

              {isEdit ? <Input defaultValue={name} onChange={handleEditName} /> : name}
              <Remove onClick={deleteTodo}>삭제</Remove>
              
              <Remove onClick={toggleEditTodo}>{isEdit ? '취소' : '수정'}</Remove>
              {isEdit && <Remove onClick={editTodo}>저장</Remove>}

            </Todo>
          );
        })}
        <Button onClick={resetTodos}>전체 삭제</Button>
      </List>
    </Container>
  );
}

export default App;