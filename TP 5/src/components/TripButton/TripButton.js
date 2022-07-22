import React, { useContext } from "react";
// import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { TripContext } from "../TripMaker/TripMaker";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    justifyContent: "right",
    margin: "0 20px 10px 20px",
  },

  button: {
    color: "#fff",
    height: "37px",
    width: "100px",
    background:
      "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelButton: {
    display: "flex",
    justifyContent: "right",
    margin: "30px 50px 0 0",
  },
});

export default function TripButton({ type, name }) {
  const classes = useStyles();
  const { setPlaces, places } = useContext(TripContext);

  const cancelPlace = () => {
    const lastPlace = places[places.length - 1];

    if (lastPlace === "Cataratas del Iguazú, Misiones") {
      console.clear();
      console.log(
        `Su reserva a "Cataratas del Iguazú, Misiones" ha sido cancelada.`
      );
      places.pop();
      setPlaces(places);
    } else if (lastPlace === "Mar del Plata, Buenos Aires") {
      console.clear();
      console.log(
        `Su reserva a "Mar Del Plata, Buenos Aires" ha sido cancelada.`
      );
      places.pop();
      setPlaces(places);
    } else {
      console.clear();
      console.log("Su acción no se puede cancelar, lo lamentamos");
    }
  };

  const buttonSelected = (type, name) => {
    switch (type) {
      case "PROMO":
        console.clear();
        setPlaces(name);
        break;

      case "RESERVAR":
        setPlaces(name);
        console.clear();
        console.log(`Ha reservado con éxito su viaje a "${name}".`);
        break;

      case "COMPRAR":
        setPlaces(name);
        console.clear();
        console.log(`Ha comprado con éxito su viaje a "${name}".`);
        break;

      case "CANCELAR":
        cancelPlace();
        break;

      default:
        console.clear();
        console.log("Opción no valida");
    }
  };

  return (
    <div
      className={type !== "CANCELAR" ? classes.wrapper : classes.cancelButton}
    >
      <button
        className={classes.button}
        onClick={() => buttonSelected(type, name)}
      >
        {type}
      </button>
    </div>
  );
}
