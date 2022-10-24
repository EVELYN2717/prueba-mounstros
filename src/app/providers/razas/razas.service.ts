import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ListRacesModel } from 'src/app/models/razas/listraces.model';
import { RacesPropertiesModel } from 'src/app/models/razas/propiedad-razas.model';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  constructor(private readonly http: HttpClient) { }

  public getRace(){
    const endpoint = `${environment.racEndpoint}`;
    return this.http.get<ListRacesModel>(endpoint);
  }

  getRaceProperties(raceIndex: string){
    const endpoint = `${environment.racEndpoint}/${raceIndex}`
    return this.http.get<RacesPropertiesModel>(endpoint);      
  }
}
