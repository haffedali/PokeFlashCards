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




  // const Alert = forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });
//   const [gameState, setGameState] = useState({
//     answerBank: [],
//     correctAnswerBank: [],
//     currentPokemon: "pikachu",
//     name: "",
//     url: "",
//     status: "pending",
//     progress: new Array(6),
//     seconds: INITIAL_SECONDS,
//     success: false,
//     score: 0,
//     session: true,
//     region: "Kanto"
//   })

//   //Refs
//   const dragItem = useRef(null);
//   const dragOverItem = useRef(null);

//   const [answerBank, setAnswerBank] = useState([]);
//   const [correctAnswerBank, setCorrectAnswerBank] = useState([]);
//   const [currentPokemon, setCurrentPokemon] = useState("pikachu");
//   const [name, setName] = useState();
//   const [url, setUrl] = useState();
//   const [status, setStatus] = useState("pending");
//   const [progress, setProgress] = useState(new Array(6));
//   const [seconds, setSeconds] = useState(1500);
//   const [success, setSuccess] = useState(false);
//   const [score, setScore] = useState(0);
//   const [session, setSession] = useState(true);
//   const [region, setRegion] = useState("Kanto")



//   const classes = useStyles();
// //   const handleSort = (answerBank, setAnswerBank) => {
// //     console.log("fired");
// //     // console.log(dragItem.current, dragOverItem.current);
// //     let _answerBank = [...answerBank];

// //     [_answerBank[dragItem.current], _answerBank[dragOverItem.current]] = [
// //       _answerBank[dragOverItem.current],
// //       _answerBank[dragItem.current],
// //     ];
// //     // const draggedItem = _answerBank.splice(dragItem.current, 1)[0];
// //     console.log(dragItem.current);
// //     console.log(dragOverItem.current);

// //     //reset refs
// //     dragItem.current = null;
// //     dragOverItem.current = null;
// //     // console.log(_answerBank, answerBank);
// //     setAnswerBank(_answerBank);
// //   };

// //   const handleSetNewPokemon = () => {
// //     setCurrentPokemon(pokemonNameGrab(region).name.toLowerCase());
// //   };
// //   const handleMatchCheck = (answers) => {
// //     setSuccess(utils.checkAnswerArray(answers, correctAnswerBank));
// //   };
// //   const handleSingleMatchCheck = () => {
// //     let _progress = utils.checkSingleAnswers(answerBank, correctAnswerBank);

// //     setProgress(_progress);
// //   };

// //   // const handleClose = (event, reason) => {
// //   //   if (reason === 'clickaway') {
// //   //     return;
// //   //   }
// //   //   setSuccess(false);
// //   // };

// //   const handleSessionStop = () => {
// //     setSession(false);
// //   };

// //   const handleSuccess = () => {
// //     let _score = score;
// //     if (success) {
// //       _score = score + 1;
// //       handleSetNewPokemon();
// //     }
// //     setScore(_score);
// //     setSuccess(false);
// //     //handleSessionStop();
// //   };

// //   // Data fetching
// //   const fetchPokemonData = async () => {
// //     setStatus("pending");
// //     const data = await fetch(
// //       `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`
// //     );
// //     const json = await data.json();
// //     setCorrectAnswerBank(json.stats);
// //     setName(json.name);
// //     setUrl(json.sprites.other["official-artwork"].front_default);
// //     const randomizedStatArray = utils.randomizedStats(json.stats);
// //     setAnswerBank(randomizedStatArray);
// //   };
  



// //  // Effect hooks
// //  // update these last!
// //   useEffect(() => {
// //     fetchPokemonData()
// //       .catch(console.error)
// //       .then(
// //         () => setStatus("complete"),
// //         () => setStatus("failed")
// //       );
// //   }, [currentPokemon]);

// //   useEffect(() => {
// //     handleSingleMatchCheck();
// //     handleMatchCheck(answerBank);
// //   }, [answerBank]);

// //   useEffect(() => {
// //     handleSuccess();
// //   }, [success]);

// //   useEffect(()=>{
// //     handleSetNewPokemon()
// //   }, [region])

  // useEffect(() => {
  //   let interval = null;
  //   if (session) {
  //     interval = setInterval(() => {
  //       setSeconds((seconds) => seconds - 1);
  //     }, 1000);
  //   }
  //   if (seconds === 0) {
  //     setSession(false);
  //   }
  //   return () => clearInterval(interval);
  // }, [session, seconds]);

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
      <PokemonHeader region={region} setRegion={setRegion}/>
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





