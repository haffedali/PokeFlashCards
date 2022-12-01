import React from "react";
import { List, Grid, Paper, ListItem } from "@mui/material";
import { useStyles } from "./AnswerBank.styles"
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
  const stats= ['Health', 'Attack', 'Sp. Atk', 'Defense', 'Sp. Def', 'Speed']
  const classes = useStyles()
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <List>
          {stats.map((e, i) => {
              return (
                <Paper className={classes.statBarLabel} key={`Attribute ${i}`}>
                  <ListItem >
                    {e}
                  </ListItem>
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
