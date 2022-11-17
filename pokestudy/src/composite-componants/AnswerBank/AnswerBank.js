import React from "react";
import { List, Grid, Paper } from "@mui/material";
import DraggableAnswerRow from "../../components/DraggableAnswerRow/DraggableAnswerRow";

function AnswerBankContainer() {
  return (
    <div>
      <Grid item xs={4}>
        <Paper>Item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>Item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>Item</Paper>
      </Grid>
    </div>
  );
}

const Answerbank = ({
  answers,
  dragItem,
  dragOverItem,
  handleSort,
  answerBank,
  setAnswerBank,
}) => {
  return (
    <div>
      <Grid>
        <List>
          {answers.map((e, i) => {
            return (
              <DraggableAnswerRow
                key={i}
                answer={e.base_stat}
                stat={e.stat.name}
                index={i}
                dragItem={dragItem}
                dragOverItem={dragOverItem}
                handleSort={handleSort}
                answerBank={answerBank}
                setAnswerBank={setAnswerBank}
              />
            );
          })}
        </List>
      </Grid>
    </div>
  );
};

export default Answerbank;
