import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from "./angularmaterial/angular.material.module";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularMaterial } from './angularmaterial/angularmaterial.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'angular-material', component: AngularMaterial },
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/app', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AngularMaterial,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
