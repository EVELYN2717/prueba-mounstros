import { Component, OnInit } from '@angular/core';
import { MonstersModel } from 'src/app/models/moustros/mounstros.model';
import { MounstrosService } from 'src/app/providers/mounstros/mounstros.service';
import { ListMonstersModel } from 'src/app/models/moustros/listMonsters.model';
import { MonstersPropertiesModel } from 'src/app/models/moustros/propiedad-mounstros.model';
import { RazasService } from 'src/app/providers/razas/razas.service';
import { ListRacesModel } from 'src/app/models/razas/listraces.model';
import { RazasModel } from 'src/app/models/razas/razas.model';

@Component({
  selector: 'app-mounstros-razas',
  templateUrl: './mounstros-razas.component.html',
  styleUrls: ['./mounstros-razas.component.scss']
})
export class MounstrosRazasComponent implements OnInit {

  public isMonsterPropExisted: any;
  public monsterPropertiesList: Array<MonstersPropertiesModel> = new Array;
  public monsters: Array<MonstersModel> = new Array;
  public races: Array<RazasModel> = new Array;
  public showMonsters: boolean = false;
  public showRaces: boolean = false;
  
  constructor(public readonly monstersService: MounstrosService, public readonly racesService: RazasService) { }

  ngOnInit(): void {
    this.getMosters();
    this.getRaces();
  }

  getMosters(){
    this.monstersService.getMonster().subscribe( (response: ListMonstersModel) => {
      this.monsters = response.results;
    })
  }

  getRaces(){
    this.racesService.getRace().subscribe( (response:  ListRacesModel) => {
      this.races = response.results;
    });
  }

  showMonstersEvent(showMonsters: boolean){
    this.showMonsters = showMonsters;
  }

  showRacesEvent(showRaces: boolean){
    this.showRaces = showRaces;
  }
}
