import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useStyles} from './PokemonDisplay.styles'



export default function PokemonDisplay({name, url, status}) {
  const classes=useStyles();
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={url}
        />
        <CardContent className={classes.cardBase}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    );
  }