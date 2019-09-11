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
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon
} from "@material-ui/core";
import { Link as Links } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import DraftsIcon from "@material-ui/icons/Drafts";
import InboxIcon from "@material-ui/icons/Inbox";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ScrollTop from "./navFuncs";
import { useStyles2 } from "./navStyles";
import "./nav.scss";

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
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

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
              onClick={toggleDrawer("right", true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer("right", false)}
              PaperProps={classes.drawer}
            >
              <div className="drawer">
                <Typography
                  component={"div"}
                  className={`${classes.links} drawer-links`}
                >
                  <IconButton
                    edge="end"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    Club Soccer
                  </IconButton>
                  <Divider />
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <Link
                        component={Links}
                        to={`/`}
                        color="inherit"
                        className={classes.link}
                      >
                        Home
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <Link
                        component={Links}
                        to={`/signup`}
                        color="inherit"
                        className={classes.link}
                      >
                        Sign Up
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <Link
                        component={Links}
                        to={`/contact`}
                        color="inherit"
                        className={classes.link}
                      >
                        Contact
                      </Link>
                    </ListItem>
                  </List>
                </Typography>
              </div>
            </Drawer>
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
