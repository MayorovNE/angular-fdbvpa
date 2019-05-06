import { Component, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContentExampleDialog } from './dialog/dialog-content-example-dialog.component';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements DoCheck {
  themeCount = false;
  themeColor = '';
  name = 'Angular';
  constructor(){
  }
  ngDoCheck() {
    if (this.themeCount === false) {
      this.themeColor = 'warn';
    }
    if (this.themeCount === true) {
      this.themeColor = 'accent';
    }
  }
}
