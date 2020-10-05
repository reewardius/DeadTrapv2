import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from './Cards';
import base from '../base/base';
import Listen from '../hook/listen';
import {Link } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root : {
    minHeight : '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },

  },
}));
export default function Scroll(){
  const classes = useStyles();
  const checked = Listen('head');
  return (
    <div className={classes.root} id='scroll-down'>
    <Link to="/phonesearch">
      <Cards base={base[0]} checked={checked}/>
    </Link>
      <Cards base={base[1]} checked={checked}/>
    </div>
  );

}