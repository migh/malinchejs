/**
  Malinche Module
  It's an advanced module for i18n and l10n. It is based on La Malinche, she
  served as interpreter for Hernan Cortez https://en.wikipedia.org/wiki/La_Malinche
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateService } from './src/services/translate.service';

@NgModule({
  imports:      [ BrowserModule ],
  exports:      [ ],
  declarations: [  ],
  providers:    [ TranslateService ]
})

export class MalincheModule {
  constructor() {
    console.log('Malintzin');
  }
}
