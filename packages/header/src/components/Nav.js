import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountBox from "@material-ui/icons/AccountBox";
import { Link as RouterLink } from "react-router-dom";
import "./Nav.scss";

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

export default function App({ isSignedIn, onSignOut }) {
  const classes = useStyles();
  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#2e2e2e" }}>
        <Toolbar>
          <Button component={RouterLink} to="/" className="button">
            App
          </Button>
          <Typography variant="h4" className={`${classes.title} button bold`}>
            QA
          </Typography>
          <Button
            className="button"
            component={RouterLink}
            to={isSignedIn ? "/" : "/auth/signin"}
            onClick={onClick}
          >
            {isSignedIn ? "Desconectar" : "Iniciar Sesión"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
