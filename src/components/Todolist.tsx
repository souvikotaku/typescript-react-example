import React from "react";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todos: Todo[];
}

const Todolist = ({ todos }: Props) => {
  return (
    <div className="todos">
      {" "}
      {todos.map((item, index) => (
        <p>{item?.todo}</p>
      ))}{" "}
    </div>
  );
};

export default Todolist;
