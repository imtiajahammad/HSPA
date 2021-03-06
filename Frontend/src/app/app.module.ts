import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './property/nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';


const appRoutes: Routes=[
  {
    path:'',component:PropertyListComponent
  }
  ,{
    path:'add-property',component:AddPropertyComponent
  }
  ,{
    path:'rent-property',component:PropertyListComponent
  }
  ,{
    path:'property-detail/:id',component:PropertyDetailComponent
  }
  ,{
    path:'*adsadsa',component:PropertyListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent
    ,PropertyCardComponent
    ,PropertyListComponent
    ,NavBarComponent, AddPropertyComponent, PropertyDetailComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,RouterModule.forRoot(appRoutes)
    ,FormsModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
