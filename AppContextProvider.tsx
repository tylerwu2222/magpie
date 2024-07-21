import React, { createContext, useState, useEffect, ReactNode } from 'react';

import { entryDataType } from './src/types/data';

import dummyCollection from './assets/data/dummyData/dummyCollection.json';


// Define the shape of your context data
interface AppContextProps {
    // user: string | null;
    // setUser: (user: string | null) => void;
    editEntryID: number;
    setEditEntryID: (editEntryID: number) => void;
    editEntryData: entryDataType;
    setEditEntryData: (editEntryData: entryDataType) => void;
}

// Create the context with default values
const AppContext = createContext<AppContextProps>({
    editEntryID: 0,
    setEditEntryID: () => {},
    editEntryData: {},
    setEditEntryData: () => {},
});

interface AppProviderProps {
    children: ReactNode;
}

// Create a Provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    // edit entry is the currently selected entry for editing...
    // const [editCollectionID, setEditCollectionID] = useState<number | null>(null); // maybe not necessary
    const [editEntryID, setEditEntryID] = useState<number>(0);
    const [editEntryData, setEditEntryData] = useState<entryDataType>(dummyCollection[0]['CollectionItems'][0]);

    // update edit entry data when ID changes
    useEffect(() => {
        console.log('app context edit entry id being set:', editEntryID)
        setEditEntryData(dummyCollection[0]['CollectionItems'][editEntryID])
    }, [editEntryID]);

    return (
        <AppContext.Provider
            value={{
                editEntryID,
                setEditEntryID,
                editEntryData,
                setEditEntryData
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
