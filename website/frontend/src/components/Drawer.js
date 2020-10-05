import React from 'react';
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import {IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SortIcon from '@material-ui/icons/Sort';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import GitHubIcon from '@material-ui/icons/GitHub';
import DetailsIcon from '@material-ui/icons/Details';
import BugReportIcon from '@material-ui/icons/BugReport';

const useStyles = makeStyles({
  icons:{
      color: '#7CFC00',
      fontSize : '5rem',
  },
  paper: {
    background: "#000"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Drawer(id) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Github Repo'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<Link href="https://github.com/Chr0m0s0m3s/DeadTrapv2"><GitHubIcon style={{color: green[500]}}/></Link>}</ListItemIcon>
            <Link href="https://github.com/Chr0m0s0m3s/DeadTrapv2"><ListItemText primary={text} style={{color: green[500]}}/></Link>
          </ListItem>
        ))}
      </List>
      <List>
        {['Phone Number Search'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<PermPhoneMsgIcon style={{color: green[500]}}/>}</ListItemIcon>
            <ListItemText primary={text} style={{color: green[500]}}/>
          </ListItem>
        ))}
      </List>
      <List>
        {['View Details'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<DetailsIcon style={{color: green[500]}}/> }</ListItemIcon>
            <ListItemText primary={text} style={{color: green[500]}}/>
          </ListItem>
        ))}
      </List>
      <List>
        {['Issue'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<Link href="https://github.com/Chr0m0s0m3s/DeadTrapv2/issues"><BugReportIcon style={{color: green[500]}}/></Link>}</ListItemIcon>
            <Link href="https://github.com/Chr0m0s0m3s/DeadTrapv2/issues"><ListItemText primary={text} style={{color: green[500]}} /></Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <IconButton>
                <SortIcon onClick={toggleDrawer(anchor, true)} className={classes.icons}/>
            </IconButton>
          <SwipeableDrawer
            classes={{ paper: classes.paper }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}