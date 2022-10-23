import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  @Input() monster: any = {};
  @Output() monsterSelectedEvent = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit(): void {
    
  }

  showProperties(index: string){
    this.monsterSelectedEvent.emit(index);
  }
}
