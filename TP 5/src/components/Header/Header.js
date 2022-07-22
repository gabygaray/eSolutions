import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import UserContext from "../User.js/User";

const useStyles = createUseStyles({
  wrapper: {
    boxShadow: "rgb(0 0 0 / 15%) 0px 3px 3px",
    height: 50,
    padding: [15, 10],
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#fff",
    zIndex: "1",
  },
  logo: {
    display: "flex",
    justifyContent: "left",
    width: "50%",
  },
  welcome: {
    display: "flex",
    width: "50%",
    fontSize: 20,
    gap: 5,
    justifyContent: "right",
    paddingRight: 60,
  },
  image: {
    height: 60,
  },
  logoText: {
    display: "flex",
    height: 60,
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default function Header() {
  const classes = useStyles();
  const user = useContext(UserContext);
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <img src="./logo.png" alt="logo" className={classes.image} />
        <div className={classes.logoText}>tripbnb</div>
      </div>
      <div className={classes.welcome}>
        Bienvenido <b>{user.name}</b>
      </div>
    </div>
  );
}
