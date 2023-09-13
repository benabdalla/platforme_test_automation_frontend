import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Documentation } from 'src/app/domain/model/Documentation';
import { Reunion } from 'src/app/domain/model/Reunion';
import { DocumentationServiceService } from 'src/app/services/documenatation/documentation-service.service';

@Component({
  selector: 'app-details-doc',
  templateUrl: './details-doc.component.html',
  styleUrls: ['./details-doc.component.css']
})
export class DetailsDocComponent {


  docuemantation?: Documentation
  items?: any[];
  typeScenrio?:string;
  constructor(private docuemnatationService: DocumentationServiceService, public dialogRef: MatDialogRef<DetailsDocComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Inject the passed data
  ) {
    console.log(data)
    this.docuemnatationService.getDocumentation(data.idScenario).subscribe(res => {
      this.docuemantation = res;
      console.log(res) 
      console.log(this.docuemantation)
      if(this.docuemantation?.etat==1){
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
          value: this.docuemantation.numFiche
        },
        {
          id: 2,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Libélle',
          value: this.docuemantation.Libelle
        },


        {
          id: 3,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'ETat',
          value: this.docuemantation.etat
        },

        {
          id: 4,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'ID'
          , value: this.docuemantation.idScenario
        },

        {
          id: 5,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Filiale'
          , value: this.docuemantation.filaileScenario
        },


        {
          id: 6,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Diffusion',
          value: this.docuemantation.typeDocumentation.responsables_gestion_diffusion
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
          title: 'Supperviseur',
          value: this.docuemantation.typeDocumentation.superviseur.name },

      
        {
          id: 9,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'Site',
        value: this.docuemantation.site?.site
        },




        {
          id: 10,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'Processus',
          value: this.docuemantation.processus?.processus
        },


        {id:11,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Activite'
          , value: this.docuemantation.activite?.activite
        },



        {
          id: 12,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Direction',
          value: this.docuemantation.direction?.direction
        },
        //=====================================>
        {
          id: 13,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'Service',
          value: this.docuemantation.service?.service
        },
        {
          id: 14,
          color: '#00ce86',
          border: '1px solid #00ce86',
          width: '100%',
          title: 'Type reunion',
          value: this.docuemantation.typeDocumentation.typeDoc
        },


        {
          id: 15,
          color: '#ec4b53',
          border: '1px solid #ec4b53',
          width: '100%',
          title: 'Abrévaition',
          value: this.docuemantation.typeDocumentation.abreviation
        },

        {
          id: 16,
          color: '#24a8f2',
          border: '1px solid #24a8f2',
          width: '100%',
          title: 'Approbateur'
          , value: this.docuemantation.typeDocumentation.approbateur
        },

        {
          id: 17,
          color: '#ff7eb7',
          border: '1px solid #ff7eb7',
          width: '100%',
          title: 'Vérificateur'
          , value: this.docuemantation.typeDocumentation.verificateurs
        },


        {
          id: 18,
          color: '#44e2e3',
          border: '1px solid #44e2e3',
          width: '100%',
          title: 'Periodicite',
          value: this.docuemantation.typeDocumentation.periodicite_revue
        },

        {
          id: 19,
          color: '#5f7dff',
          border: '1px solid #5f7dff',
          width: '100%',
          title: 'ID type'
          , value: this.docuemantation.typeDocumentation.accuse_reception
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
