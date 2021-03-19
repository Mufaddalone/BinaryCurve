import './App.css';
import React, {useState,useRef} from 'react'
import ReactToPrint from 'react-to-print';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function App() {
  const classes = useStyles();
  const ref = useRef();
  const andleChange = (event) => {
    setValue(event.target.value);
  };
  const [setValue] = React.useState('female');


  return (
    <div ref={ref}>
        <form>
          <h1 style={{
           textAlign:"center"
          }}>Fill The Form</h1>
          <br/>
          <br/>
          <Card style={{marginLeft:"10rem", marginRight:"10rem"}}>
        <CardContent>
        <h1 style={{
            marginLeft:"50px" ,marginRight:"50px"
          }}>General Information</h1>
          <br/>
         <TextField id="outlined-basic" label="Name" variant="outlined" 
         style={{marginLeft:"25px" ,marginRight:"25px", width:"90%"}} />
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Email id" variant="outlined" 
         style={{marginLeft:"25px" ,marginRight:"25px", width:"90%"}} />
         <br/>
        <br/>
        <TextField id="outlined-basic" label="Address" variant="outlined" multiline rows={4}
         style={{marginLeft:"25px" ,marginRight:"25px", width:"90%"}} />
         <br/>
        <br/>
        <TextField id="outlined-basic" label="College Name" variant="outlined" multiline rows={2}
         style={{marginLeft:"25px" ,marginRight:"25px", width:"90%"}} />
         <br/>
        <br/>
        <FormControl component="fieldset" style={{marginLeft:"25px" ,marginRight:"25px"}}>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" onChange={andleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
        <br/>
        <br/>
        <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        style={{marginLeft:"25px" ,marginRight:"25px"}}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <br/>
        <br/>
        <ReactToPrint
        trigger={() => <Button  variant="contained" color="primary" style={{marginLeft:"50%"}}>Print</Button>}
        content={() => ref.current}
      />
        </CardContent>
      </Card>
        </form>
    </div>
  );
}

export default App;
