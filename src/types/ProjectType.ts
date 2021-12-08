import { ICharacter } from "../interfaces/ICharacter";
import { ILocations } from "../interfaces/ILocations";

export type ProjectType = {
  characters: ICharacter[];
  locations: ILocations[];
};
