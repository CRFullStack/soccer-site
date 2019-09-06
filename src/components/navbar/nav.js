import React from "react";
import PropTypes from "prop-types";
import {
  CssBaseline,
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Fab,
  Typography,
  Hidden
} from "@material-ui/core";
import { Link as Links } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./navFuncs";
import { useStyles2 } from "./navStyles";

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function BackToTop(props) {
  const classes = useStyles2();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.root}>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            Club Soccer
          </IconButton>
          <Hidden mdUp>
            <IconButton
              edge="end"
              className={classes.links}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Typography component={"div"} className={classes.links}>
              <Link
                component={Links}
                to={`/`}
                color="inherit"
                className={classes.link}
              >
                Home
              </Link>
              <Link
                component={Links}
                to={`/signup`}
                color="inherit"
                className={classes.link}
              >
                Sign Up
              </Link>
              <Link
                component={Links}
                to={`/contact`}
                color="inherit"
                className={classes.link}
              >
                Contact
              </Link>
            </Typography>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
