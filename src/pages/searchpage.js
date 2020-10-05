import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import OutlinedTextFields from "../components/searchfield";

const useStyles = makeStyles((theme) => ({
  root : {
    minHeight : '100vh',
    backgroundImage: `url(${'https://img5.goodfon.com/wallpaper/nbig/5/67/karta-mira-mir-chernyi-fon-zelenyi.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat',

  },
}));
export default function SearchPage(){
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <CssBaseline />
    <OutlinedTextFields />
  </div>
  );

}