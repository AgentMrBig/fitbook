import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Meal from "./Meal";

const useStyles = makeStyles({
  table: {
    minWidth: 320,
  }
})

export default function MealList({mealData}){
  const classes = useStyles();
  const nutrients = mealData.nutrients;
  console.log(mealData);

  return(
    <main>
      <TableContainer className="nutrients">
        <Table className={classes.table} size="small" aria-label="Nutrients Table">
          <TableHead>
            <TableRow>
              <TableCell>{mealData.title}</TableCell>
              <TableCell>Calories: {nutrients.calories}</TableCell>
              <TableCell>Carbohydrates: {nutrients.carbohydrates}</TableCell>
              <TableCell>Fat: {nutrients.fat}</TableCell>
              <TableCell>Protein: {nutrients.protein}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        
      </TableContainer>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  )
}