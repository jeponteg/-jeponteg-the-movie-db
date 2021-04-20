import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SVGLogo from '../../assets/img/logo.svg';
import '../../assets/styles/components/Header.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar className="appbar-header" position="static" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <figure className='header__logo'>
              <img 
                className='header__logo-img'
                src={SVGLogo}
                alt='logo'
                onClick={handleClick}
            />
            </figure>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
