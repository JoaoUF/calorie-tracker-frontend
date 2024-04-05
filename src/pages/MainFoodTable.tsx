import * as React from 'react';
import ButtonAppBar from '../layouts/ButtonAppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ComboBox from '../components/ComboBox';
import { Food } from '../services/food/Food.interface';

export default function MainFoodTable() {
  const [value, setValue] = React.useState<Food | null>(null);
  const [foodList, setFoodList] = React.useState<Food[]>([]);

  return (
    <Box
      minHeight='100vh'
      maxWidth='100vw'
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <ButtonAppBar />
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='start'
          alignItems='center'
          sx={{
            my: '3rem',
            gap: '1rem',
          }}
        >
          <ComboBox value={value} setValue={setValue} foodList={foodList} />
        </Box>
      </Container>
    </Box >
  )
}