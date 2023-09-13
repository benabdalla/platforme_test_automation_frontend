import { Activite } from "./Activite";
import { Direction } from "./Direction";
import { Processus } from "./Processus";
import { Site } from "./Site";
import { TabService } from "./TabService";
import { TypeDocuemntation } from "./TypeDocuemntation";
import { TypeReunion } from "./TypeReunion";
export class Documentation {
    idScenario!:number;
    numFiche!: number
    etat!:number;
    Libelle !:string;
  filaileScenario!:string;
     site!: Site;
     processus!: Processus
     activite!: Activite
     direction!: Direction
     service!: TabService
     typeDocumentation!:TypeDocuemntation;
     



 


}
