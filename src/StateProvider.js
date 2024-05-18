import React, { createContext, useContext, useReducer } from "react";

//Preapring the data layer
const StateContext = createContext();
const StateProvider = ({reducer, intialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
)

//Hook which allows to pull information from data layer
const useStateValue = () => useContext(StateContext)

export {StateContext, StateProvider, useStateValue}