import { Direction } from "./Direction";
import Utilisateur from "./Utilisateur";

export class ScenarioDirectionDto {
idScenarioDirection!:number;
 filialeDeclencheur!:string;
 direction!:Direction;
dechlencheur!:Utilisateur;
}