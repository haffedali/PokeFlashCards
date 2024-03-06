import React from "react";
import { List, Grid, Paper, ListItem } from "@mui/material";
import { useStyles } from "./AnswerBank.styles"
import DraggableAnswerRow from "../../components/DraggableAnswerRow/DraggableAnswerRow";


const Answerbank = ({
  answers,
  dragItem,
  dragOverItem,
  handleSort,
  answerBank,
  setAnswerBank,
  progress
}) => {
  const stats= ['Health', 'Attack', 'Sp. Atk', 'Defense', 'Sp. Def', 'Speed']
  const classes = useStyles()
  return (
    <div>
      <Grid container className={classes.answerBank}>
        <Grid item xs={2}>
          <List>
          {stats.map((e, i) => {
              return (
                <Paper variant="outlined" className={progress[i] ? classes.statBarLabelCorrect : classes.statBarLabel} key={`Attribute ${i}`}>
                  <div>
                    {e}
                  </div>
                </Paper>
              );
            })}
          </List>
        </Grid>
        <Grid item xs={10}>
          <List>
            {answers.map((e, i) => {
              return (
                <DraggableAnswerRow
                  className={classes.draggableAnswerRow}
                  key={`draggable ${i}`}
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
      </Grid>
    </div>
  );
};

export default Answerbank;
