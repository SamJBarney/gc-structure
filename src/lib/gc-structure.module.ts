import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { GCFooterComponent } from './gc-footer/gc-footer.component';
import { GCHeaderComponent } from './gc-header/gc-header.component';
import { Browser } from 'protractor';

@NgModule({
  declarations: [
    GCFooterComponent,
    GCHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    GCFooterComponent,
    GCHeaderComponent
  ]
})
export class GcStructureModule { }
