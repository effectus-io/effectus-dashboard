import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';

import {AppRoutingModule}from './app-routing.module';
import {AppComponent}from './app.component';
import {NavbarComponent}from './navbar/navbar.component';
import {SidenavComponent}from './sidenav/sidenav.component';
import {FooterComponent}from './footer/footer.component';
import {EffectusModule }from './effectus/effectus.module';

@NgModule({
declarations: [
AppComponent,
NavbarComponent,
SidenavComponent,
FooterComponent
],
imports: [
BrowserModule,
AppRoutingModule,
EffectusModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {

}
