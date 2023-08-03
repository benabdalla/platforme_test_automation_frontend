import { Processus } from "./Processus";
import Utilisateur from "./Utilisateur";

export class ScenarioPrcocessDto {
    idScenarioProcessus!: number;
    filialeDeclencheur!: String;
    processus!: Processus;
    dechlencheur!: Utilisateur;
}