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

  const defaultProps = {
    options: foodList,
    getOptionLabel: (option: Food) => option.name
  }

  return (
    <Autocomplete
      {...defaultProps}
      id="combo-box-demo"
      disablePortal
      value={value}
      onChange={(event: any, newValue: Food | null) => {
        setValue(newValue)
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Food" />}
    />
  );
}