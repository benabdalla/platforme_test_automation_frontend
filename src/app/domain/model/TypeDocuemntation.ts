
import Utilisateur from "./Utilisateur";
export class TypeDocuemntation {
    idType!:number;
    abreviation !:string;
    typeDoc!:string;
    pdf!:number;
    etat!:number;
    periodicite_revue!:number;
     nature!:number;
    superviseur !: Utilisateur;
    redacteur !: Utilisateur;
    verificateurs !: Utilisateur;
    approbateur !: Utilisateur;
    accuse_reception !: Utilisateur;
    responsables_gestion_diffusion!: Utilisateur;


    

}
