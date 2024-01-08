import React from "react";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todos: Todo[];
  randomObject: Record<string, number>;
}

const Todolist = ({ todos, randomObject }: Props) => {
  console.log("randomObject", randomObject);
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
