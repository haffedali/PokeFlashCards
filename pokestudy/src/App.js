import "./App.css";
import { useEffect, useState, useContext, createContext, useRef, forwardRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Answerbank from "./composite-componants/AnswerBank/AnswerBank";
import Timer from "./components/Timer/Timer";
import BasicModal from './components/GameOverModal/GameOverModal';
import { useStyles } from './App.styles.js'

import utils from "./utils";

function App() {
  const Pokemon = new Array("Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew");
  // const Alert = forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });
  const [answerBank, setAnswerBank] = useState([]);
  const [correctAnswerBank, setCorrectAnswerBank] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState('pikachu')
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const [progress, setProgress] = useState(new Array(6))
  const [seconds, setSeconds] = useState(15);
  const [success, setSuccess] = useState(false)
  const [score, setScore] = useState(0);
  const [session,setSession] = useState(true);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const classes = useStyles()
  const handleSort = (answerBank, setAnswerBank) => {
    // console.log(dragItem.current, dragOverItem.current);
    let _answerBank = [...answerBank];

    [_answerBank[dragItem.current], _answerBank[dragOverItem.current]] =
    [_answerBank[dragOverItem.current], _answerBank[dragItem.current]]
    // const draggedItem = _answerBank.splice(dragItem.current, 1)[0];
    console.log(dragItem.current)
    console.log(dragOverItem.current)



    //reset refs
    dragItem.current = null;
    dragOverItem.current = null;
    // console.log(_answerBank, answerBank);
    setAnswerBank(_answerBank);
  };



  const handleSetNewPokemon = () => {
    let i = Math.floor(Math.random()*150)

    setCurrentPokemon(Pokemon[i].toLowerCase())
  }
  const handleMatchCheck = (answers) => {
    setSuccess(utils.checkAnswerArray(answers, correctAnswerBank))
  }
  const handleSingleMatchCheck = () => {
    let _progress = utils.checkSingleAnswers(answerBank, correctAnswerBank)

    setProgress(_progress)
  }

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setSuccess(false);
  // };

  const handleSessionStop = () => {
    setSession(false)
  }

  const handleSuccess = () => {
    let _score = score
    if (success){
      _score = score + 1
      handleSetNewPokemon();
    }
    setScore(_score);
    setSuccess(false);
    //handleSessionStop();
  }

  useEffect(() => {
    const fetchData = async ()=> {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`)
      const json = await data.json()
      setCorrectAnswerBank(json.stats)
      setName(json.name)
      setUrl(json.sprites.other["official-artwork"].front_default);
      const randomizedStatArray = utils.randomizedStats(json.stats)
      setAnswerBank(randomizedStatArray)
    }

    fetchData()
      .catch(console.error)

  }, [currentPokemon]);

  useEffect(() => {
    handleSingleMatchCheck()
    handleMatchCheck(answerBank)
  },[answerBank])

  useEffect(()=> {
    handleSuccess();
  },[success])

  useEffect(() => {
    let interval = null;
    if (session) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }
    if (seconds === 0 ){
      setSession(false)
    }
    return () => clearInterval(interval);
  }, [session, seconds]);
  
  function PokemonDisplay({ name, url }) {
    return (
      <Card className={classes.container}>
        <CardMedia
          component="img"
          alt={name}
          image={url}
          height="250"
          sx={{objectFit: 'contain'}}
        />
        {/* <Timer /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Timer session={session} time={seconds}/>
          <Answerbank
            answers={answerBank}
            dragItem={dragItem}
            dragOverItem={dragOverItem}
            handleSort={handleSort}
            answerBank={answerBank}
            setAnswerBank={setAnswerBank}
            progress={progress}
          />
        </CardContent>
        <CardActions>
          <Button onClick={()=>handleSetNewPokemon()} size="small">Next</Button>
        <div>{score}</div>
        </CardActions>
        <BasicModal score={score} session={session} />
      </Card>
    );
  }

  return <PokemonDisplay sx={{ height: "80%" }} name={name} url={url} />;
}

export default App;
