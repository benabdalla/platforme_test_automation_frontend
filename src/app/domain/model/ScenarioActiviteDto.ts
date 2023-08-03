import { Activite } from "./Activite";
import Utilisateur from "./Utilisateur";

export class ScenarioActiviteDto {



 idScenarioActivite!:number;
    filialeDeclencheur!:string;
    activite !:Activite;
    dechlencheur!:Utilisateur;
}