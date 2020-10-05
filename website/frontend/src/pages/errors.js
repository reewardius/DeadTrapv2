import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Particles from 'react-particles-js';
import Errors from '../components/particles';
const useStyles = makeStyles((theme) => ({
  root : {
    minHeight : '100vh',
    backgroundImage: `url(${'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat',

  },
  particlePosition:{
    position: 'absolute',
  }
}));
export default function Particle(){
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <CssBaseline />
    <Particles 
      canvasClassName={classes.particlePosition}
      params={{
        particles:{
          number:{
            value:69,
            density:{
              value_area: 6990
            }
          },
          shape:{
            type: 'circle',
            stroke: {
              width: 1,
              color: '#fff',
            }
          },
          size: {
            value: 8,
            random: true,
            anim:{
              enable: true,
              speed: 15,
              size_min: 0.5,
              sync: true
            }
          }
        }
      }} />
    <Errors />
  </div>
  );

}