import { Activite } from "./Activite";
import { Direction } from "./Direction";
import { Processus } from "./Processus";
import { Site } from "./Site";
import { TabService } from "./TabService";
import { TypeReunion } from "./TypeReunion";
export class Reunion {
    idScenario!:number;
    numFiche!: number
    etat!:number;
     datePrevue !:string;
      lieu!:string;
      type !:string;
      orderJour!:string;
     site!: Site;
     processus!: Processus
     activite!: Activite
     direction!: Direction
     service!: TabService
     typeReunionDto!:TypeReunion;





 


}
