import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,  } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DinoComponent } from './composants/dino/dino.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeComponent } from './composants/home/home.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DinoComponent,
    HomePageComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
