import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

export default function RadioOptions({optionA, optionB}) {
  const [value, setValue] = useState(`${optionA}`);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={optionA} control={<Radio />} label={optionA} />
        <FormControlLabel value={optionB} control={<Radio />} label={optionB} />
      </RadioGroup>
    </FormControl>
  );
}
