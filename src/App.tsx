import React from "react";
import "./App.css";

let name: string;
let age: number;

//union example
let age2: number | string;

age2 = "33 years";

function printName(name: string) {
  console.log(name);
}

let isStudent: boolean;
let hobbies: string[];

//tuple example of typescript
let role: [string, number];
role = ["Student", 3];

//object example of typescript

type Person = {
  name: string;
  age: number;
};
let person: Person = {
  name: "Souvik",
  age: 33,
};

//interface example of typescript

interface Person2 extends Person {
  profession: string;
}

let newObj: Person2 = {
  name: "Souvik",
  age: 33,
  profession: "plastic surgeon",
};

console.log(newObj);

name = "Souvik";

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
