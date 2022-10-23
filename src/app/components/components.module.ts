import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponentComponent } from './card-component/card-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { CardComponentRazasComponent } from './card-component-razas/card-component-razas.component';


@NgModule({
  declarations: [
    CardComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    CardComponentRazasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    CardComponentRazasComponent
  ]
})
export class ComponentsModule { }
