import { Component, Input, OnInit } from '@angular/core';
import { RacesPropertiesModel } from 'src/app/models/razas/propiedad-razas.model';
import { RazasService } from 'src/app/providers/razas/razas.service';

@Component({
  selector: 'app-card-component-razas',
  templateUrl: './card-component-razas.component.html',
  styleUrls: ['./card-component-razas.component.scss']
})
export class CardComponentRazasComponent implements OnInit {

  @Input() raceChild: any = {};
  public showRaceProp = false;
  public racePropertie: RacesPropertiesModel;
  public racesPropertiesList: Array<RacesPropertiesModel> = new Array;

  constructor(public readonly racesService: RazasService) { }

  ngOnInit(): void {
  }

  showProperties(index: string){
    console.log("lenght", this.racesPropertiesList.length);
    if(this.racesPropertiesList.length == 0 ){
      this.racesService.getRaceProperties(index).subscribe( (response: RacesPropertiesModel) => {
        this.racePropertie = response;
        this.racesPropertiesList.push(response);
      });
    };
    this.showRaceProp = !this.showRaceProp;
    console.log("index", index, "IF", this.showRaceProp);
  };
}
