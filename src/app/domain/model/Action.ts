import { Activite } from "./Activite";
import { Direction } from "./Direction";
import { Processus } from "./Processus";
import { Site } from "./Site";
import { TabService } from "./TabService";
import Utilisateur from "./Utilisateur";
export class Action {
    idScenario!:number;
    numFiche!: number
    etat!:number;
    actSimplifier!:number;
    filialeDeclencheur!: string ;
    filialeRealisation !: string;
    filialeSuivi!: string ;
    filialeCloture !: string;
    source!: string
    typeAction!: string
    priorite!: string
    gravite!: string
    typeCause!: string

    designation!: string
    description!: string
    site!: Site;
    processus!: Processus
    activite!: Activite
    direction!: Direction
    service!: TabService
    DesiSA!: string
    dateRealisation!: string
    tauxRealisation!: string
    dateSuivi!: string
    tauxSuivi!: string
    dateCreation!: string
    produit!: string
    run: boolean=false
    dechlencheur!: Utilisateur;
    respTraitement!: Utilisateur;
    respCloture!: Utilisateur;
    respSuivi!: Utilisateur;




 


}
