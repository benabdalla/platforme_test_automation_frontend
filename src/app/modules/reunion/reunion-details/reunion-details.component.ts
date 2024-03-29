import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reunion } from 'src/app/domain/model/Reunion';
import { ReunionServiceService } from 'src/app/services/reunion/reunion-service.service';

@Component({
  selector: 'app-reunion-details',
  templateUrl: './reunion-details.component.html',
  styleUrls: ['./reunion-details.component.css']
})
export class ReunionDetailsComponent {


  reunion?: Reunion
  items?: any[];
  typeScenrio?:string;
  constructor(private reunionService: ReunionServiceService, public dialogRef: MatDialogRef<ReunionDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inject the passed data
  ) {
    console.log(data)
    this.reunionService.getReunion(data.idScenario).subscribe(res => {
      this.reunion = res;
      console.log(res) 
      console.log(this.reunion)
      if(this.reunion?.etat==1){
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
          value: this.reunion.numFiche
        },
        {
          id: 2,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Order de jour ',
          value: this.reunion.orderJour
        },


        {
          id: 3,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'ETat',
          value: this.reunion.etat
        },

        {
          id: 4,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'ID'
          , value: this.reunion.idScenario
        },

        {
          id: 5,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Gravite'
          , value: this.reunion.datePrevue
        },


        {
          id: 6,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Lieu',
          value: this.reunion.lieu
        },

        {
          id: 7,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'Type Scénario'
          , value: this.typeScenrio
        },

        {
          id: 8,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Déclencheur',
          value: this.reunion.typeReunion.dechlencheur.name },

      
        {
          id: 9,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'Site',
        value: this.reunion.site?.site
        },




        {
          id: 10,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'Processus',
          value: this.reunion.processus?.processus
        },


        {id:11,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Activite'
          , value: this.reunion.activite?.activite
        },



        {
          id: 12,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Direction',
          value: this.reunion.direction?.direction
        },
        //=====================================>
        {
          id: 13,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'Service',
          value: this.reunion.service?.service
        },
        {
          id: 14,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Type reunion',
          value: this.reunion.typeReunion.typeReunion
        },


        {
          id: 15,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'Filiale déclencheur',
          value: this.reunion.typeReunion.filialeDeclencheur
        },

        {
          id: 16,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'Participant'
          , value: this.reunion.typeReunion.pourInfo.name
        },

        {
          id: 17,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Filiale Participant'
          , value: this.reunion.typeReunion.filialeRealisation
        },


        {
          id: 18,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Periodicite',
          value: this.reunion.typeReunion.periodicite
        },

        {
          id: 19,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'ID type'
          , value: this.reunion.typeReunion.idType
        },

        


      ]



    })
  }
  fermerPopup(): void {
    this.dialogRef.close();
  }

  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';


  ngOnInit() {
  }
}