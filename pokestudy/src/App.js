import "./App.css";
import { useEffect, useState, useContext, createContext, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Answerbank from "./composite-componants/AnswerBank/AnswerBank";

function App() {
  const [answerBank, setAnswerBank] = useState([]);
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = (answerBank, setAnswerBank) => {
    console.log(dragItem.current, dragOverItem.current);
    let _answerBank = [...answerBank];

    const draggedItem = _answerBank.splice(dragItem.current, 1)[0];

    // console.log(_answerBank.splice(dragOverItem.current,0,draggedItem))
    _answerBank.splice(dragOverItem.current, 0, draggedItem);

    //reset refs
    dragItem.current = null;
    dragOverItem.current = null;
    console.log(_answerBank, answerBank);
    setAnswerBank(_answerBank);
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {})
      .then((res) => res.json())
      .then(
        (res) => {
          console.log(res);
          setAnswerBank(res.stats);
          setName(res.name);
          setUrl(res.sprites.other["official-artwork"].front_default);
        },
        (err) => {
          console.log(err);
        }
      );
  }, []);

  function PokemonDisplay({ name, url }) {
    return (
      <Card sx={{ maxWidth: "50rem" }}>
        <CardMedia
          component="img"
          alt={name}
          image={url}
          height="250"
          sx={{objectFit: 'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          <Answerbank
            answers={answerBank}
            dragItem={dragItem}
            dragOverItem={dragOverItem}
            handleSort={handleSort}
            answerBank={answerBank}
            setAnswerBank={setAnswerBank}
          />
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    );
  }

  return <PokemonDisplay sx={{ height: "80%" }} name={name} url={url} />;
}

export default App;
