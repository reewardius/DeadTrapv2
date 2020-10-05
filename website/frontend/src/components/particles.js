import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  base : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',

  },
  center:{
    textAlign : 'center',
    },

  down:{
    color: '#fff',
    fontFamily: 'Nunito Sans',
    fontSize: '3rem',
    },

}));
export default function Errors(){
  const classes = useStyles();
  return (
  <div className={classes.base}>
    <div className={classes.center}>
          <h1 className={classes.down}>404 
              <br />
                Page Not Found
          </h1>
    </div>
  </div>
  );

}