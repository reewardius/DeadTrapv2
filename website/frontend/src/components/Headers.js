import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse} from '@material-ui/core';
import { Link } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Drawer from './Drawer';

const useStyles = makeStyles((theme) => ({
    base:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    bg : {
        background: 'none',
        fontFamily: 'Nunito Sans',
    },
    title : {
        flexGrow : '1',
    },
    wrapper: {
        width : '90%',
        margin : '0 auto',
    },
    color:{
        color: '#7CFC00',
    },
    color2:{
        color: '#fff',
    },
    center:{
        textAlign : 'center',
    },
    down:{
        color: '#fff',
        fontFamily: 'Nunito Sans',
        fontSize: '3rem',
    },
    buttom:{
        color: '#7CFC00',
        fontSize: '5rem',
    }

}));

export default function Headers(){
  const classes = useStyles();
  const [checked, setChecked] =  useState(false);
  useEffect(() => {
        setChecked(true);
  }, [])
  return (
  <div className={classes.base} id='head'>
      <AppBar className={classes.bg} elevation={0}>
          <Toolbar className={classes.wrapper}>
            <h1 className={classes.title}>
              <span className={classes.color}>DeadTrap</span> <span className={classes.color2}>Web</span>
            </h1>
            <Drawer />
          </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} collapsedHeight={10}>
      <div className={classes.center}>
          <h1 className={classes.down}>Find identifying information about 
              <br />
                <span className={classes.color}>Phone Numbers</span>
          </h1>
          <Link to='scroll-down' smooth={true}>
          <IconButton>
              <ExpandMoreIcon className={classes.buttom} />
          </IconButton>
          </Link>
      </div>
      </Collapse>
  </div>
  )

}