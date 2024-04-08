import * as React from 'react';
import ButtonAppBar from '../layouts/ButtonAppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ComboBox from '../components/ComboBox';
import { Food } from '../services/food/Food.interface';
import { FoodService } from '../services/food/Food.service';
import { ConsumeService } from '../services/consume/Consume.service';
import AuthContext from '../context/AuthContext';
import BasicTable from '../components/BasicTable';

export default function MainFoodTable() {
  let { user }: any = React.useContext(AuthContext);
  const [value, setValue] = React.useState<Food | null>(null);
  const [foodList, setFoodList] = React.useState<Food[]>([]);
  const [myFoodList, setMyFoodList] = React.useState<Food[]>([]);

  const getFood = async () => {
    try {
      const foodService = new FoodService()
      const output = await foodService.getAllProducts()
      setFoodList(output)
    } catch (error) {
      console.log(error)
    }
  }

  const getConsume = async () => {
    try {
      const consumeService = new ConsumeService()
      const output = await consumeService.getAllMyProducts(user.id)
      console.log(output)
      setMyFoodList(output)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getFood();
    getConsume();
  }, [])

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
        <BasicTable foodList={myFoodList} />
      </Container>
    </Box >
  )
}