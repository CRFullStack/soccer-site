import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export const useStyles2 = makeStyles(theme => ({
  appbar: { backgroundColor: "#DD1188" },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontFamily: "'Poppins', sans-serif"
  },
  title: {
    flexGrow: 1
  },
  links: {
    marginLeft: "auto"
  },
  link: {
    margin: theme.spacing(1),
    fontFamily: "'Poppins', sans-serif"
  },
  drawer: {
    backgroundColor: "pink"
  }
}));

export default {
  useStyles,
  useStyles2
};
