
import Utilisateur from "./Utilisateur";
export class TypeReunion {
    idType!:number;
    typeReunion !:string;
    periodicite!:string;
    dechlencheur !: Utilisateur;
    pourInfo !: Utilisateur;
    filialeDeclencheur!: string ;
    filialeRealisation !: string;
}
