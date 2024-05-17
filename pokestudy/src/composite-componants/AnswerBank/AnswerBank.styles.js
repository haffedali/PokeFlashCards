import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme)=>({
    statBarLabel: {
        padding: '1vh',
        margin:'1vh',
        marginTop: '2.7vh',
        height: '2vh',
        width: '6vw',
        textOverflow: 'clip',
    },
    statBarLabelCorrect: {
        padding: '1vh',
        margin:'1vh',
        marginTop: '2.7vh',
        height: '2vh',
        width: '6vw',
        textOverflow: 'clip',
        boxShadow: '0 0 0 2pt green',
    },
    draggableAnswerRow: {

    },
    answerBank: {
        backgroundColor: 'lightgray'
    }
}))