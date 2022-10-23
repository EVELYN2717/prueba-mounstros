import { Component, Input, OnInit } from '@angular/core';
import { MonstersModel } from 'src/app/models/moustros/mounstros.model';
import { Router } from '@angular/router';
import { MounstrosService } from 'src/app/providers/mounstros/mounstros.service';
import { ListMonstersModel } from 'src/app/models/moustros/listMonsters.model';
import { MonstersProperties } from 'src/app/models/moustros/propiedad-mounstros.model';

@Component({
  selector: 'app-mounstros-razas',
  templateUrl: './mounstros-razas.component.html',
  styleUrls: ['./mounstros-razas.component.scss']
})
export class MounstrosRazasComponent implements OnInit {

                
  public monsters: Array<MonstersModel> = new Array;
  
  constructor(private readonly router: Router, public readonly monstersService: MounstrosService) { }

  ngOnInit(): void {
    this.getMosters();
  }

  getMosters(){
    this.monstersService.getMonster().subscribe( (response: ListMonstersModel) => {
      this.monsters = response.results;
    })
  }

  getMonsterProperties(monsterIndex: string){
    console.log("PARENT INDEX", monsterIndex);
    this.monstersService.getMonsterProperties(monsterIndex).subscribe( (response: MonstersProperties) => {
//      this.monsterProperties = response;
    })
  }

}
