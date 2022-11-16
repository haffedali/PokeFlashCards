import React from "react";
import { ListItem, ListItemText, Paper, Typography } from "@mui/material";
const DraggableAnswerRow = ({ answer, index, dragItem, dragOverItem }) => {
    const onDragStart = (e, i) => {
        console.log('drag started', i)
    }
    const onDragEnter = (e, i) => {
        console.log('drag enter', i)

    }
    const onDragEnd = (e, i) => {
        console.log('drag end', i)

    }



  return (
    <div draggable onDragStart={e => dragItem.current=index} onDragEnter={e => dragOverItem.current=index} onDragEnd={e => onDragEnd(e,index)}>
      <Paper>
        <ListItem>
          <ListItemText primary={answer} />
        </ListItem>
      </Paper>
    </div>
  );
};

export default DraggableAnswerRow;
