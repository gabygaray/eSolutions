import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    minWidth: "300px",
    height: "50px",
    border: "1px solid red",
    borderRadius: "10px",
    margin: "auto",
    background:
      "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
    fontWeight: "bold",
    textTransform: "uppercase",
    boxShadow: "rgba(0, 0, 0, 0.6) 0px 6px 16px",
    cursor: "pointer",
  },
});

const places = [
  "Mendoza",
  "Córdoba",
  "Buenos Aires",
  "Tierra del Fuego",
  "Jujuy",
];

export default function TripOff() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      VIAJÁ AHORA MISMO A {places[Math.floor(Math.random() * places.length)]}{" "}
      CON UN 25% DE DESCUENTO!!!
    </div>
  );
}
