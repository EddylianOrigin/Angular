import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { HorizontalTreeComponent } from './horizontal-tree/horizontal-tree.component';
import {TreeModule} from "primeng/tree";
import {NodeService} from "./service/node.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DialogModule} from "primeng/dialog";
import {AvatarModule} from "primeng/avatar";
import {AccordionModule} from "primeng/accordion";
import {AutoCompleteModule} from "primeng/autocomplete";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {BadgeModule} from "primeng/badge";
import {BlockUIModule} from "primeng/blockui";
import {CalendarModule} from "primeng/calendar";
import {CarouselModule} from "primeng/carousel";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ChipsModule} from "primeng/chips";
import {ChartModule} from "primeng/chart";
import {CheckboxModule} from "primeng/checkbox";
import {ChipModule} from "primeng/chip";
import {CodeHighlighterModule} from "primeng/codehighlighter";
import {ColorPickerModule} from "primeng/colorpicker";
import {InputSwitchModule} from "primeng/inputswitch";
import {GalleriaModule} from "primeng/galleria";
import {InplaceModule} from "primeng/inplace";
import {InputMaskModule} from "primeng/inputmask";
import {GMapModule} from "primeng/gmap";
import {FileUploadModule} from "primeng/fileupload";
import {DropdownModule} from "primeng/dropdown";
import {FieldsetModule} from "primeng/fieldset";
import {EditorModule} from "primeng/editor";
import {DynamicDialogModule} from "primeng/dynamicdialog";

import {DockModule} from "primeng/dock";
import {DividerModule} from "primeng/divider";
import {DataViewModule} from "primeng/dataview";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {ContextMenuModule} from "primeng/contextmenu";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import {LightboxModule} from "primeng/lightbox";
import {InputNumberModule} from "primeng/inputnumber";
import {ImageModule} from "primeng/image";
import {KnobModule} from "primeng/knob";
import {ListboxModule} from "primeng/listbox";
import {MegaMenuModule} from "primeng/megamenu";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {MessagesModule} from "primeng/messages";
import {MultiSelectModule} from "primeng/multiselect";
import {OrganizationChartModule} from "primeng/organizationchart";
import {CardModule} from "primeng/card";
import {AnimateModule} from "primeng/animate";
import {TreeTableModule} from "primeng/treetable";
import {TreeSelectModule} from "primeng/treeselect";
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {TooltipModule} from "primeng/tooltip";
import {ToolbarModule} from "primeng/toolbar";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ToastModule} from "primeng/toast";
import {TimelineModule} from "primeng/timeline";
import {TieredMenuModule} from "primeng/tieredmenu";
import {TabMenuModule} from "primeng/tabmenu";
import {TerminalModule} from "primeng/terminal";
import {TagModule} from "primeng/tag";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";
import {StepsModule} from "primeng/steps";
import {SplitButtonModule} from "primeng/splitbutton";
import {SplitterModule} from "primeng/splitter";
import {SpinnerModule} from "primeng/spinner";
import {SpeedDialModule} from "primeng/speeddial";
import {ScrollTopModule} from "primeng/scrolltop";
import {SliderModule} from "primeng/slider";
import {SlideMenuModule} from "primeng/slidemenu";
import {SkeletonModule} from "primeng/skeleton";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {ScrollerModule} from "primeng/scroller";
import {SidebarModule} from "primeng/sidebar";
import {SelectButtonModule} from "primeng/selectbutton";
import {RatingModule} from "primeng/rating";
import {RadioButtonModule} from "primeng/radiobutton";
import {ProgressBarModule} from "primeng/progressbar";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {PickListModule} from "primeng/picklist";
import {PasswordModule} from "primeng/password";
import {PanelMenuModule} from "primeng/panelmenu";
import {PanelModule} from "primeng/panel";
import {PaginatorModule} from "primeng/paginator";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {OrderListModule} from "primeng/orderlist";
import {DragDropModule} from "primeng/dragdrop";


@NgModule({
  declarations: [
    AppComponent,
    HorizontalTreeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    DialogModule,

    AvatarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    BreadcrumbModule,
    BlockUIModule,
    ButtonModule,
    CalendarModule,
    CarouselModule,
    CascadeSelectModule,
    ChartModule,
    CheckboxModule,
    ChipsModule,
    ChipModule,
    CodeHighlighterModule,
    ColorPickerModule,
    ConfirmDialogModule,
    ContextMenuModule,
    VirtualScrollerModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DockModule,
    DragDropModule,
    DropdownModule,
    DynamicDialogModule,
    EditorModule,
    FieldsetModule,
    FileUploadModule,
    GalleriaModule,
    GMapModule,
    InplaceModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ImageModule,
    KnobModule,
    LightboxModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    MultiSelectModule,
    OrganizationChartModule,
    OrderListModule,
    OverlayPanelModule,
    PaginatorModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    PickListModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    SlideMenuModule,
    SliderModule,
    SpeedDialModule,
    SpinnerModule,
    SplitterModule,
    SplitButtonModule,
    StepsModule,
    TableModule,
    TabMenuModule,
    TabViewModule,
    TagModule,
    TerminalModule,
    TieredMenuModule,
    TimelineModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    TriStateCheckboxModule,
    TreeModule,
    TreeSelectModule,
    TreeTableModule,
    AnimateModule,
    CardModule,

  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
