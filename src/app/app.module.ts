import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MounstrosRazasComponent } from './pages/mounstros-razas/mounstros-razas.component';
import { MounstrosService } from './providers/mounstros/mounstros.service';


@NgModule({
  declarations: [
    AppComponent,
    MounstrosRazasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [MounstrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
