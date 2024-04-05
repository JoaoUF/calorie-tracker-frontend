import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Food } from '../services/food/Food.interface';

interface ComboBoxProps {
  value: Food | null
  setValue: (data: Food | null) => void
  foodList: Food[]
}

export default function ComboBox(props: ComboBoxProps) {
  const { value, setValue, foodList } = props

  return (
    <Autocomplete
      id="combo-box-demo"
      disablePortal
      value={value}
      onChange={(event: any, newValue: Food | null) => {
        setValue(newValue)
      }}
      options={foodList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Food" />}
    />
  );
}