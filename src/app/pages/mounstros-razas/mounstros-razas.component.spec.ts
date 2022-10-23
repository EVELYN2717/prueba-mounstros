import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MounstrosRazasComponent } from './mounstros-razas.component';

describe('MounstrosRazasComponent', () => {
  let component: MounstrosRazasComponent;
  let fixture: ComponentFixture<MounstrosRazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MounstrosRazasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MounstrosRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
