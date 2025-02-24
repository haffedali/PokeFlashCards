// Imports (grouped and ordered)
import React, { useEffect, useState, useRef } from "react";
import { Card, Paper, Button, Box, CircularProgress, CardMedia, Typography } from '@mui/material';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// Custom components
import Answerbank from "./composite-componants/AnswerBank/AnswerBank";
import Timer from "./components/Timer/Timer";
import BasicModal from "./components/GameOverModal/GameOverModal";
import PokemonHeader from "./components/PokemonHeader/PokemonHeader.js";
import  useGameState  from "./hooks/useGameState.js";
import useCount from "./hooks/useCount.js";

// Styles and utilities
import { useStyles } from "./App.styles.js";
import pokemonNameGrab from './utils/pokemonNameGrab.js';
import utils from "./utils";

// Constants (move to separate file if grows larger)
const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const INITIAL_SECONDS = 1500;

function App() {
  const {count, setCount} = useCount()
  const classes = useStyles();

  const {
    cat,
    gameState,
    handleSetNewPokemon,
    dragItem,
    dragOverItem,
    handleSort,
    handleSingleMatchCheck,
    handleSessionStop,
    updateGameState
  } = useGameState()

  const {
    answerBank,
    correctAnswerBank,
    currentPokemon,
    name,
    url,
    status,
    progress,
    seconds,
    success,
    score,
    session,
    region,
  } = gameState;


  function PokemonCardMedia({status, name, url}) {
    if (status === "pending") {
      return(
        <Box className={classes.circularProgress} height="250">
          <CircularProgress size={100}/>
        </Box>
      )
    }
    return (
      <CardMedia
        component="img"
        alt={name}
        image={url}
        sx={{ objectFit: "contain" }}
        className={classes.cardMedia}
      />
    );
  }

  function AppDisplay({ name, url }) {
    return (
      <Box className={classes.body}>
      {/* <PokemonHeader region={region} setRegion={setRegion}/> */}
      <PokemonHeader region={region} setRegion={updateGameState}/>
      {/* <MenuListComposition /> */}
      <Paper className={classes.container} >
        <Card className={classes.cardContainer}>
        <PokemonCardMedia status ={status} name={name} url={url}/>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Answerbank
            answers={answerBank}
            dragItem={dragItem}
            dragOverItem={dragOverItem}
            handleSort={handleSort}
            answerBank={answerBank}
            setAnswerBank={updateGameState}
            progress={progress}
          />
        </CardContent>
        <CardActions>
          <Button onClick={() => handleSetNewPokemon()} size="small">
            Next
          </Button>
          <div>{score}</div>
        </CardActions>
        <BasicModal score={score} session={session} />
        </Card>
      </Paper>
      </Box>
    );
  }

 return <AppDisplay name={name} url={url} />
}


export default App;





