import { Dispatch, SetStateAction } from "react";

export type entryDataType = {
    id: number,
    title?: string,
    subtitle?: string,
    image?: string,
    description?: string
};

export type setEntryDataType = Dispatch<SetStateAction<Array<entryDataType>>>;

export const defaultEntryData = {
    id: 0,
    title: '',
    subtitle: '',
    image: '',
    description: ''
}