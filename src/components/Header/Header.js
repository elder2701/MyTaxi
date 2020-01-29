import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Link as LinkRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          My Taxi
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            to="/profile"
            className={classes.link}
            component={LinkRouter}
          >
            Map
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            to="/map"
            className={classes.link}
            component={LinkRouter}
          >
            Profile
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            to="/login"
            className={classes.link}
            component={LinkRouter}
          >
            Log in
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
