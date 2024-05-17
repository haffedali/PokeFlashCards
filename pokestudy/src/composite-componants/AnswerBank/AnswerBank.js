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
                <Paper sx={{
                  backgroundColor: '#add8e6',
                  // WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  // transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  // boxShadow: '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)'
                }} elevation={0} variant="outlined" className={progress[i] ? classes.statBarLabelCorrect : classes.statBarLabel} key={`Attribute ${i}`}>
                  
                    {e}
          
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
