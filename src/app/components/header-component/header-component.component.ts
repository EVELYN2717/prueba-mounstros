import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  @Output() showMonstersEvent = new EventEmitter<boolean>();
  @Output() showRacesEvent = new EventEmitter<boolean>();
  public showMonsters: boolean;
  public showRaces: boolean;

  title: any = {
    name1: 'Moustros',
    name2: 'Razas'
  }

  constructor() { }

  ngOnInit(): void {
  }

  redirecToMo(){
    this.showMonstersEvent.emit(true);
    this.showRacesEvent.emit(false);
  }

  redirecToRa(){
    this.showRacesEvent.emit(true);
    this.showMonstersEvent.emit(false);
  }
}
