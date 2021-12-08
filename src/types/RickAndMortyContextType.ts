import { ICharacter } from "../interfaces/ICharacter";
import { ILocations } from "../interfaces/ILocations";

export type RickAndMortyContextType = {
  characters: ICharacter[];
  locations: ILocations[];
};
