import React, { createContext, useContext, useReducer } from 'react';

// Provide a data layer
export const StateContext = createContext();

// Wrap our app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

// Pull the info from the data layer
export const useStateValue = () => useContext(StateContext);
