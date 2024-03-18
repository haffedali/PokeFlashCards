import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        position: 'relative',
        left: '10vw',
        width: '80vw',
        right: '10vw',
        height: '95vh',
        top: '5vh',

        // top: '10%'
    },
    cardContainer: {
        width: '100%',
        maxHeight: '100%'
    },
    circularProgress: {
        position: 'relative',
        left: '35vw',
        right: '10vw',
        top: '10vh',
        height: '27.2vh'
    },
    cardMedia: {
        height: '27.2vh'
    },
    answerBank: {
        position: 'relative',
        outline: 'solid',
        outlineColor: 'blue',
    },
    cardContent: {
        outline: 'solid',
        outlineColor: 'blue'
    },
    timer: {
        outline: 'solid',
        outlineColor: 'blue'
    }
})