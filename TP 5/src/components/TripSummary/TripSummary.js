import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { TripContext } from "../TripMaker/TripMaker";

const useStyles = createUseStyles({
  wrapper: {
    boxShadow: "rgb(0 0 0 / 15%) 0px -3px 2px",
    display: "flex",
    width: "100%",
    height: 80,
    position: "fixed",
    bottom: 0,
    background: "#fff",
    alignItems: "center",
    padding: "10px",
  },
  cart: {
    marginRight: "10px",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 20,
    maxHeight: 40,
    "& li": {
      paddingBottom: 2,
      marginRight: 40,
    },
  },
});

export default function TripSummary() {
  const classes = useStyles();
  const { places } = useContext(TripContext);

  const summaryPlaces = places.filter(
    (place) =>
      place === "Perito Moreno, Santa Cruz" ||
      place === "Mar del Plata, Buenos Aires"
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.cart}>
        <b>CARRO:</b>
      </div>
      <ul className={classes.list}>
        {summaryPlaces.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
