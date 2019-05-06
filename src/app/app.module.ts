import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DialogContentExampleDialog } from './dialog/dialog-content-example-dialog.component';
import { DemoMaterialModule } from './material-module';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, DemoMaterialModule],
  declarations: [AppComponent, SidenavComponent, DialogContentExampleDialog],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentExampleDialog]
})
export class AppModule { }
