import React from "react";
// import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import TripButton from "../TripButton/TripButton";

const useStyles = createUseStyles({
  wrapper: {},
  card: {
    display: "flex",
    flexWrap: "wrap",
    border: "1px solid rgb(221, 221, 221)",
    borderRadius: 12,
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 16px",
    margin: "20px 20px 10px 20px",
    padding: 24,
    position: "relative",
    width: 200,
    height: 400,
  },
  name: {
    margin: 10,
  },
  image: {
    width: "100%",
  },
  text: {
    textAlign: "justify",
    fontSize: "13px",
    height: "125px",
  },
  price: {
    display: "flex",
    justifyContent: "right",
    width: "100%",
  },
});

export default function TripItem({ image, name, text, price, typeButton }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <img
          className={classes.image}
          src={image}
          alt={name}
          aria-label={name}
        ></img>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.text}>{text}</p>
        <h2 className={classes.price}>{price}</h2>
      </div>
      <TripButton type={typeButton} name={name} />
    </div>
  );
}

// TripItem.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
// };
