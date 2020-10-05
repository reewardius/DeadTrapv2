import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(34,139,34, 0.1)',
    margin: '40px'
  },
  media: {
    height: 440,
  },
  style:{
      fontFamily: 'Nunito Sans',
      color: '#7CFC00'
  }
});

export default function Cards({base, checked}) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={base.image}
          title={base.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.style}>
            {base.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.style}>
            {base.func}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Collapse>
  );
}