import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Action } from 'src/app/domain/model/Action';
import { ActionServiceService } from 'src/app/services/actionServices/action-service.service';

@Component({
  selector: 'app-act-simplifier-details',
  templateUrl: './act-simplifier-details.component.html',
  styleUrls: ['./act-simplifier-details.component.css']
})
export class ActSimplifierDetailsComponent {

  action?: Action
  items?: any[];
  typeScenrio?:string;
  constructor(private actionService: ActionServiceService, public dialogRef: MatDialogRef<ActSimplifierDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inject the passed data
  ) {
    console.log(data)
    this.actionService.getAction(data.idScenario).subscribe(res => {
      this.action = res;
      console.log(res) 
      console.log(this.action)
      if(this.action?.etat===1){
        this.typeScenrio="Spécifique"
      }else{
        this.typeScenrio="Génirique"
      }

      this.items = [
        {
          id: 1,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'N°fiche',
          value: this.action.numFiche
        },
        {
          id: 2,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Source',
          value: this.action.source
        },


        {
          id: 3,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'Type',
          value: this.action.typeAction
        },

        {
          id: 4,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'Priorite'
          , value: this.action.priorite
        },

        {
          id: 5,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Gravite'
          , value: this.action.gravite
        },


        {
          id: 6,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Type de cause',
          value: this.action.typeCause
        },

        {
          id: 7,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'Désignation'
          , value: this.action.designation
        },

        {
          id: 8,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Description',
          value: this.action.description },

      
        {
          id: 9,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'Site',
        value: this.action.site?.site
        },




        {
          id: 10,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'Processus',
          value: this.action.processus?.processus
        },


        {id:11,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Activite'
          , value: this.action.activite?.activite
        },



        {
          id: 12,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Direction',
          value: this.action.direction?.direction
        },
        //=====================================>
        {
          id: 13,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'Service',
          value: this.action.service?.service
        },
        {
          id: 14,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Désagniation Sous Action',
          value: this.action.desiSA
        },


        {
          id: 15,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'Date de réalisation',
          value: this.action.dateRealisation
        },

        {
          id: 16,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'Taux réalisation'
          , value: this.action.tauxRealisation
        },

        {
          id: 17,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Date suivi'
          , value: this.action.dateSuivi
        },


        {
          id: 18,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Taux de suivi',
          value: this.action.tauxSuivi
        },

        {
          id: 19,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'Date création'
          , value: this.action.dateCreation
        },

        {
          id: 20,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Produit',
        value: this.action.produit },

        {
          id: 21,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'Type scénario',
        value: this.typeScenrio
        },




        {
          id: 22,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'Déchlencheur',
          value: this.action.dechlencheur.name
        },


        {
          id: 23,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Resp.traitement'
          , value: this.action.respTraitement.name        },



        {
          id: 25,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Responsable Clôture',
          value: this.action.respCloture.name,
        },
        
        {
          id: 26,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Responsable de suivi',
          value: this.action.respSuivi.name,
        },


      ]



    })
  }
  onClose(): void {
    this.dialogRef.close();
  }

  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';


  ngOnInit() {
  }
}



