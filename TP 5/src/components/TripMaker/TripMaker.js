import React, { createContext, useReducer } from "react";
import TripBuilder from "../TripBuilder/TripBuilder";
import { createUseStyles } from "react-jss";
import TripSummary from "../TripSummary/TripSummary";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
  },
});

export const TripContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function TripMaker() {
  const classes = useStyles();
  const [places, setPlaces] = useReducer(reducer, []);
  return (
    <div className={classes.wrapper}>
      <TripContext.Provider value={{ places, setPlaces }}>
        <TripBuilder />
        <TripSummary />
      </TripContext.Provider>
    </div>
  );
}
