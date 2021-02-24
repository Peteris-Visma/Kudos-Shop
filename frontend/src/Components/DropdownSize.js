import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [size, setSize] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Size</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={size}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"small"}>Small</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"large"}>Large</MenuItem>
          <MenuItem value={"xl"}>XL</MenuItem>
          <MenuItem value={"xll"}>XXL</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
