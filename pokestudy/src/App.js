import "./App.css";
import { useEffect, useState, useContext, createContext, useRef } from "react";
import Answerbank from "./composite-componants/AnswerBank/AnswerBank";
const testAnswers = ["Zacian", "Rillaboom", "Thundurus", "Regieleki"];

function App() {
  const [answerBank, setAnswerBank] = useState([
    "Zacian",
    "Rillaboom",
    "Thundurus",
    "Regieleki",
  ]);
  const onDragStart = (e, i) => {
    console.log("drag started", i);
  };
  const onDragEnter = (e, i) => {
    console.log("drag enter", i);
  };
  const onDragEnd = (e, i) => {
    console.log("drag end", i);
  };

  const handleSort = () => {
    let _answerBank= [...Answerbank]
  }
  
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)
  return (
    <div>
      <Answerbank answers={answerBank} dragItem={dragItem} dragOverItem={dragOverItem}/>
    </div>
  );
}

export default App;
