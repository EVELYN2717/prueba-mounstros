import { Component, Input, OnInit } from '@angular/core';
import { MonstersPropertiesModel } from 'src/app/models/moustros/propiedad-mounstros.model';
import { MounstrosService } from 'src/app/providers/mounstros/mounstros.service';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  @Input() monsterChild: any = {};
  public showMonsterProp = false;
  public monsterPropertie: MonstersPropertiesModel;
  public monsterPropertiesList: Array<MonstersPropertiesModel> = new Array;

  constructor(public readonly monstersService: MounstrosService) {}

  ngOnInit(): void {
  }

  showProperties(index: string){
    if(this.monsterPropertiesList.length == 0 ){
      this.monstersService.getMonsterProperties(index).subscribe( (response: MonstersPropertiesModel) => {
        this.monsterPropertie = response;
        this.monsterPropertiesList.push(response);
      });
    }
    this.showMonsterProp = !this.showMonsterProp;
  }
}
