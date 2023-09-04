import { Activite } from "./Activite";
import { Direction } from "./Direction";
import { Processus } from "./Processus";
import { Site } from "./Site";
import { TabService } from "./TabService";
import Utilisateur from "./Utilisateur";
export class DemandeAction {
    idScenario!:number;
    numFiche!: number
    filialeDeclencheur!: string ;
    source!: string
    typeAction!: string
    typeCause!: string
    designation!: string
    description!: string
    site!: Site;
    processus!: Processus
    activite!: Activite
    direction!: Direction
    service!: TabService
    desiSA!: string
    dateRealisation!: string
    tauxRealisation!: string
    dateSuivi!: string
    tauxSuivi!: string
    dateCreation!: string
    dechlencheur!: Utilisateur;
    respTraitement!: Utilisateur;
    respSuivi!: Utilisateur;
    respReal!: Utilisateur;
    etat!:number;





 


}
