import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FetchInfo from '../components/info';

const styles = theme => ({
  base:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily : "Nunito Sans",
    color: "white",
    fontSize: "45px",
},
  text:{
    fontFamily : "Nunito Sans",
    color: "green",
  },
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "green"
    },
    "& .MuiOutlinedInput-input": {
      color: "green"
    },
    "& .MuiInputLabel-outlined": {
      color: "green"
  },
},
  color: {
    color: "green",
  },
  button:{
    borderColor: "green",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(55),
    marginRight: '61px'
  },
});

class OutlinedTextFields extends React.Component {
  constructor(){
    super();
    this.state = {
      search : "",
      clicked : "",
    };
  }
  handleOnChange = event => {
    this.setState({search : event.target.value});
    console.log(this.state.search);
  }
  handleSubmit(event) {
    event.preventDefault();
    
  }
  handleClick = clicked => {
    this.setState({clicked: clicked});
  }
  render() {
    const { classes } = this.props;
    if(this.state.clicked){
      if(this.state.search){
        return(
          <FetchInfo links={this.state.search} />
        )
      }
    }
    if(this.state.clicked){
      if(!this.state.search){
        return <div className={classes.base}>Go back and enter a number to search</div>
      }
    }
    return (
    <Grid container justify = "center">
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          style = {{width: 900}}
          id="filled-search"
          label="Phone Number"
          className={classes.root}
          margin="normal"
          variant="outlined"
          onChange={this.handleOnChange}
        />
        
    <Grid container justify = "center">
    <Button variant="outlined" onClick={this.handleClick} className={classes.button} >
        <span className={classes.text}>Search</span>
    </Button>
    </Grid>
      </form>
    </ Grid>
    );   
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(OutlinedTextFields);