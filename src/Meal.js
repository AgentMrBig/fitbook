import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function Meal({meal}) {
  const classes = makeStyles();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5c856260ede643f9bc82edd937560738&includeNutrition=false`
    )
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.image);
      console.log(data)
    })
    .catch(() => {
      console.log("error");
    })
  }, [meal.id])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Food Photo"
        />
      
        <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {meal.title}
          </Typography>
          <Typography className={classes.bullet} color="textSecondary" gutterBottom>
            Preperation time: {meal.readyInMinutes} minutes
            Number of servings: {meal.servings}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Get Recipe
        </Button>
      </CardActions>
    </Card>
  )
}
