import { TabService } from "./TabService";
import Utilisateur from "./Utilisateur";

export  class ScenarioServiceDto {

   idScenarioService!: number;
   filialeDeclencheur!: String;
   tabService!:TabService;
   dechlencheur!: Utilisateur;
}
