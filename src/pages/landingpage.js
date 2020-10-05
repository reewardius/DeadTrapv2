import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Headers from '../components/Headers'
import Scroll from '../components/Scroll'
const useStyles = makeStyles((theme) => ({
  root : {
    minHeight : '100vh',
    backgroundImage: `url(${'https://i.postimg.cc/rmdCghxh/0-auto-x2-colored-toned.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat',

  },
}));
export default function LandingPage(){
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <CssBaseline />
    <Headers />
    <Scroll />
  </div>
  );

}