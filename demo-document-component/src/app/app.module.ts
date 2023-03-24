import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { HorizontalTreeComponent } from './horizontal-tree/horizontal-tree.component';
import {TreeModule} from "primeng/tree";
import {NodeService} from "./service/node.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RenamePopupComponent } from './rename-popup/rename-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HorizontalTreeComponent,
    RenamePopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
