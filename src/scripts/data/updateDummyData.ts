import fs from 'fs';
// import path from 'path';

import dummyCollection from "@/assets/data/dummyData/dummyCollection.json";

// update a collection entries field 
// note entryID is just index for dummyData
export const updateEntry = (collectionID: number, entryID: number, updatedField: any) => {

    console.log('updating dummy data:', updatedField)

    // const collection = dummyCollection.find(col => col.CollectionID === collectionID);

    // ISNT ACTUALLY UPDATING... b/c no write
    
}