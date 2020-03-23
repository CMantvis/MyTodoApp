import React, { useState, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = props => {
    const [list, setList] = useState([
        {
            task: "buy a bag",
            completed: false,
            id: 23434
        },
        {
            task: "feed the cat",
            completed: false,
            id: 12345
        },
        {
            task: "walk the dog",
            completed: false,
            id: 67890
        }
    ]);

    return (
        <DataContext.Provider value={[list, setList]}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContext;
