import { duration } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>({
  container: {
    width: "80vw",
    height: "85vh",
    padding: "0px",
  },
  statBarContainer: {
    padding: ".7vh",
    margin: "1vh",
    marginTop: '1.7vh',
    height: '4vh',
    color: 'blue'
  },
  gridContainer: {},
  buttonContainer: {
    padding: "0.5vw",
    paddingTop: "1.5vw",
    backgroundColor: '#d3d3d340'
  },
  //ripped from www.smogon.com/dex/ss/pokemon/abomasnow
  statBar: {
    boxShadow:
      "inset 1px 4px 0 rgb(255 255 255 / 40%), inset -1px -1px 0 rgb(0 0 0 / 30%)",
    height: "3vh",
    backgroundColor: (props) => props[0],
    width: (props) => props[1],
    maxWidth: '100%',
    animationName: "PokemonStatBar-anim",
    animationDuration: ".7s",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-in-out",
  },
  "@keyframes PokemonStatBar-anim": {
    "0%": {
      width: "0",
      backgroundColor: "#fff",
    },
  },
}));
