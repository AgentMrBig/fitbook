import React, { useState } from "react";
import MealList from "./MealList";
import DefaultAppBar from "./AppBar.Component";
import { Button, Input, Container, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css";

const useStyles = makeStyles({
  mainBG: {
    backgroundColor: "lightgrey",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  calorieInput: {
    border: "1px solid grey",
    background: "#fff",
    textAlign: "center",
  },
  caloriesInputGroup: {
    padding: "20px",
  },
});

function App() {
  const classes = useStyles();
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=5c856260ede643f9bc82edd937560738&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <Container style={{ padding: 0, width: "100%" }}>
      <DefaultAppBar />
      <Container className={classes.mainBG}>
        <Grid
          container
          style={{ padding: 10 }}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Input
            style={{ margin: 10, textAlign: "center" }}
            variant="outlined"
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={getMealData}>
            Get Daily Meal Plan
          </Button>
        </Grid>

        {mealData && <MealList mealData={mealData} />}
      </Container>
    </Container>
  );
}

export default App;
