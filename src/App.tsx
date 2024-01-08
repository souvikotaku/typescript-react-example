import React, { useState, useEffect } from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";
import Todolist from "./components/Todolist";
import { Todo } from "./model";

// let name: string;
// let age: number;

// //union example
// let age2: number | string;

// age2 = "33 years";

// function printName(name: string) {
//   console.log(name);
// }

// let isStudent: boolean;
// let hobbies: string[];

// //tuple example of typescript
// let role: [string, number];
// role = ["Student", 3];

// //object example of typescript

// type Person = {
//   name: string;
//   age: number;
// };
// let person: Person = {
//   name: "Souvik",
//   age: 33,
// };

// //interface example of typescript

// interface Person2 extends Person {
//   profession: string;
// }

// let newObj: Person2 = {
//   name: "Souvik",
//   age: 33,
//   profession: "plastic surgeon",
// };

// console.log(newObj);

// name = "Souvik";

// interface Todo {
//   id: number;
//   todo: string;
//   isDone: boolean;
// }

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todo);
  console.log(todos);

  useEffect(() => {
    console.log("hellow");
  }, []);

  const onClick = (test: string) => {
    return 5;
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Inputfield
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
        onClick={onClick}
      >
        Go
      </Inputfield>
      <Todolist
        todos={todos}
        randomObject={{
          age1: 33,
          age2: 34,
        }}
      />
      {/* {todos.map((item, index) => (
        <p>{item?.todo}</p>
      ))} */}
    </div>
  );
};

export default App;
