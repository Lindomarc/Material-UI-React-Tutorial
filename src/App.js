import React from 'react'
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

 
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FE8E53 )',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const  theme = createMuiTheme({
  typography: {
    h2:{
      fontSize: 36

    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExemple() {
  const [checked, setChecked] = React.useState(true)
  return(    
    <FormControlLabel  
      control ={
        <Checkbox
          checked={checked}
          icon={<SaveIcon/>}
          checkedIcon={<SaveIcon/>}
          onChange={(e)=>setChecked(e.target.checked)}
          inputProps={{
            'arial-label':'secondary checkbox'
          }}
        />
      }
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <Container maxWidth="md">
      <ThemeProvider theme={theme}> 
        <div className="App">
          <header className="App-header"> 
          
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6">
                Mui Themeing
              </Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>


          <Typography variant="h2" component="div">
                Welcome to MUI
              </Typography>

          <Typography variant="subtitle1">
            Learn how to use Material UI
          </Typography>
          
            <ButtonStyled />
            <Grid container spacing={2} justify='center'>
                <Grid item xs={3} sm={6}>
                  <Paper style={{ height:75, width:'100%', }}/>
                </Grid>
                <Grid item xs={3} sm={6}>
                  <Paper style={{ height:75, width:'100%', }}/>
                </Grid>
                <Grid item  xs={3} sm={6}>
                  <Paper style={{ height:75, width:'100%', }}/>
                </Grid>
            </Grid>
            <CheckboxExemple />
            <ButtonGroup variant="contained" color="primary" >
              <Button 
                startIcon={<SaveIcon/>}
                size="large">
                Save
              </Button>
              <Button 
                startIcon={<DeleteIcon/>}
                size="large">
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div>
      </ThemeProvider>  
    </Container>
  );
}

export default App;
