import React from "react";
import { ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useStyles } from "./DraggableAnswerRow.styles";
import utils from "../../utils";
const DraggableAnswerRow = ({
  answer,
  stat,
  index,
  dragItem,
  dragOverItem,
  handleSort,
  answerBank,
  setAnswerBank,
}) => {
  let colorWidth = utils.generateStatRowColorAndFill(stat, answer);
  const classes = useStyles(colorWidth);
  const onDragStart = (e, i) => {
    dragItem.current = index;
    console.log("drag start", dragItem.current);
  };
  const onDragEnter = (e, i) => {
    dragOverItem.current = index;
    console.log("drag over", dragOverItem.current);
  };

  // console.log(answerBank)
  return (
    <Paper
      className={classes.statBarContainer}
      elevation={5}
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={() => handleSort(answerBank, setAnswerBank)}
    >
      <div className={classes.statBar}>
        <ListItemText primary={answer} />
      </div>
    </Paper>
  );
};

export default DraggableAnswerRow;
