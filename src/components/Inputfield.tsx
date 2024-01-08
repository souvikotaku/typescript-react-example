import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  onClick: (test: string) => number;
  children: React.ReactNode;
}

const Inputfield = ({ todo, setTodo, handleAdd, onClick, children }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input_box"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input_submit" type="submit">
        {children}
      </button>
    </form>
  );
};

export default Inputfield;
