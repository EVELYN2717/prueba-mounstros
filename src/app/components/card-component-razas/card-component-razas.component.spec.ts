import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentRazasComponent } from './card-component-razas.component';

describe('CardComponentRazasComponent', () => {
  let component: CardComponentRazasComponent;
  let fixture: ComponentFixture<CardComponentRazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentRazasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
