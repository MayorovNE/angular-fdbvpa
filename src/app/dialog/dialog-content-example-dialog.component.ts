import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }
}

export interface DialogData {
  themeColor: string;
}