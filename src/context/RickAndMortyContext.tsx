import React, {FC, createContext, useState, useEffect} from "react";
import {ICharacter } from "../interfaces/ICharacter"
import { ProjectType } from "../types/ProjectType";
import { rickAndMortyServices } from "../service/RickAndMortyService";
import { ILocations } from "../interfaces/ILocations";

export const RickAndMortyContext = createContext<ProjectType | null>(null);

export const RickAndMortyProvider : FC = ({children}) => {

    const [characters, setCharaters] = useState<ICharacter[]>([]);
    const [locations, setLocations] = useState<ILocations[]>([]);

    useEffect( () => {
        getCharatersFromService();
        getLocationFromService();
    }, [])

    const getCharatersFromService = async () => {
        const results = await rickAndMortyServices.getAll();
        setCharaters(results);
    }

    const getLocationFromService = async () => {
        const results = await rickAndMortyServices.getAllLocation();
        setLocations(results);
    }

    return(
        <RickAndMortyContext.Provider value={{characters, locations}}>
            {children}
        </RickAndMortyContext.Provider>
    )

}