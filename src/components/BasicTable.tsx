import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Food } from '../services/food/Food.interface';

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function carbsTotal(items: readonly Food[]) {
  return items.map(({ carbs }) => carbs).reduce((sum, i) => sum + i, 0);
}

function caloriesTotal(items: readonly Food[]) {
  return items.map(({ calories }) => calories).reduce((sum, i) => sum + i, 0);
}

function fatTotal(items: readonly Food[]) {
  return items.map(({ fats }) => fats).reduce((sum, i) => sum + i, 0);
}

function proteinTotal(items: readonly Food[]) {
  return items.map(({ protein }) => protein).reduce((sum, i) => sum + i, 0);
}

interface BasicTableProps {
  foodList: Food[],
}

export default function BasicTable(props: BasicTableProps) {
  const { foodList } = props

  const sumCarbs = carbsTotal(foodList)
  const sumCalories = caloriesTotal(foodList)
  const sumFat = fatTotal(foodList)
  const sumProtein = proteinTotal(foodList)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodList.map((food) => (
            <TableRow
              key={food.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {food.name}
              </TableCell>
              <TableCell align="right">{food.calories}</TableCell>
              <TableCell align="right">{food.fats}</TableCell>
              <TableCell align="right">{food.carbs}</TableCell>
              <TableCell align="right">{food.protein}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">{ccyFormat(sumCalories)}</TableCell>
            <TableCell align="right">{ccyFormat(sumFat)}</TableCell>
            <TableCell align="right">{ccyFormat(sumCarbs)}</TableCell>
            <TableCell align="right">{ccyFormat(sumProtein)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
