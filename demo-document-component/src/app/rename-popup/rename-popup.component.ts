import { Component } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-rename-popup',
  templateUrl: './rename-popup.component.html',
  styleUrls: ['./rename-popup.component.css']
})
export class RenamePopupComponent {
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }
  ngOnInit() { }
}
