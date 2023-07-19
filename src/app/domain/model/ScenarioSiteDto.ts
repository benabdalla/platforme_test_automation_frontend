import { Site } from "./Site";
import Utilisateur from "./Utilisateur";

export class ScenarioSiteDto{
    idScenarioSite !:Number ;
    filialeDeclencheur!:string
    site !:Site;
    dechlencheur!:Utilisateur;
}