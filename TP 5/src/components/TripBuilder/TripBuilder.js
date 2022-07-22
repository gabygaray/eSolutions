import React from "react";
import TripItem from "../TripItem/TripItem";
import { createUseStyles } from "react-jss";
import TripButton from "../TripButton/TripButton";
import TripOff from "../TripOff/TripOff";

const useStyles = createUseStyles({
  wrapper: {
    marginTop: 100,
    marginBottom: 100,
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center",
  },
});

const places = [
  {
    image: "img01.jpg",
    name: "Perito Moreno, Santa Cruz",
    text: "El glaciar Perito Moreno es una gruesa masa de hielo ubicada en el departamento Lago Argentino de la provincia de Santa Cruz, en el sudoeste de la Argentina, en la región de la Patagonia. ¡No te lo pierdas!",
    price: "$ 72.000",
    typeButton: "PROMO",
  },
  {
    image: "img02.jpg",
    name: "Cataratas del Iguazú, Misiones",
    text: "Las cataratas del Iguazú son un conjunto de cataratas que se localizan sobre el río Iguazú, en el límite entre la provincia argentina de Misiones y el estado brasileño de Paraná. ¡Visítalas!",
    price: "$ 57.000",
    typeButton: "RESERVAR",
  },
  {
    image: "img03.jpg",
    name: "Mar del Plata, Buenos Aires",
    text: "Mar del Plata es una ciudad balnearia argentina en la costa del Atlántico. Su larga franja de playas incluye la amplia Punta Mogotes y Playa Grande, con sus rompientes para el surf. ¡Vení a vacacionar!",
    price: "$ 46.000",
    typeButton: "COMPRAR",
  },
];

export default function TripBuilder() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <TripOff />
      <TripButton type="CANCELAR" />
      <div className={classes.cards}>
        {places.map((places) => (
          <TripItem
            key={places.name}
            image={__dirname + "images/" + places.image}
            name={places.name}
            text={places.text}
            price={places.price}
            typeButton={places.typeButton}
          />
        ))}
      </div>
    </div>
  );
}
