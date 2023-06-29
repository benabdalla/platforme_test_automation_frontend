import Utilisateur from "./Utilisateur";

export class Action {
    idScenario!:number;
    numFiche!: number
    source!: string
    type!: string
    priorite!: string
    gravite!: string
    typeCause!: string
    designation!: string
    description!: string
    site!: string
    processus!: string
    activite!: string
    direction!: string
    service!: string
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
