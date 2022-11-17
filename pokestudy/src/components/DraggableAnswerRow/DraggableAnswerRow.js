import React from "react";
import { ListItem, ListItemText, Paper, Typography } from "@mui/material";
const DraggableAnswerRow = ({ answer, index, dragItem, dragOverItem, handleSort, answerBank, setAnswerBank }) => {
    const onDragStart = (e, i) => {
        dragItem.current = index
        console.log('drag start', dragItem.current)
    }
    const onDragEnter = (e, i) => {
      dragOverItem.current = index
      console.log('drag over', dragOverItem.current)
    }
    const onDragEnd = (e, i) => {
        console.log('drag end', i)

    }

  return (
    <div draggable onDragStart={onDragStart} onDragEnter={onDragEnter} onDragEnd={() => handleSort(answerBank, setAnswerBank)}>
      <Paper>
        <ListItem>
          <ListItemText primary={answer} />
        </ListItem>
      </Paper>
    </div>
  );
};

export default DraggableAnswerRow;
