import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MonstersProperties } from 'src/app/models/moustros/propiedad-mounstros.model';
import { ListMonstersModel } from 'src/app/models/moustros/listMonsters.model';


@Injectable({
  providedIn: 'root'
})
export class MounstrosService {

  constructor(private readonly http: HttpClient) { }

  public getMonster(){
    const endpoint = `${environment.mouEndpoint}`;
    return this.http.get<ListMonstersModel>(endpoint);
  }

  public getMonsterProperties(monsterIndex: string){
    const endpoint = `${environment.propmoEndpoint}/${monsterIndex}`
    return this.http.get<MonstersProperties>(endpoint);
  }
}
