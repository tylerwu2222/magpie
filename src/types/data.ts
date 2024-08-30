import { Dispatch, SetStateAction } from "react";

export type entryDataType = {
    id: number,
    title?: string,
    subtitle?: string,
    image?: string,
    description?: string,
    updated_at?: Date,
    created_at?: Date
};

export type newEntryDataType = {
    user_id?: number,
    title?: string,
    subtitle?: string,
    image?: string,
    description?: string,
    updated_at?: Date,
    created_at?: Date
};

export type setEntryDataType = Dispatch<SetStateAction<Array<entryDataType>>>;
export type setNewEntryDataType = Dispatch<SetStateAction<Array<newEntryDataType>>>;

export const defaultEntryData = {
    id: 0,
    title: '',
    subtitle: '',
    image: '',
    description: ''
}