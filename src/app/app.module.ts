// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MutantDetectorComponent } from './mutant-detector/mutant-detector.component';

@NgModule({
  declarations: [AppComponent, MutantDetectorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]), // Configura el enrutamiento aquí si es necesario
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
