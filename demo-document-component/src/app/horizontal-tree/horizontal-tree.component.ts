import {Component, OnInit} from '@angular/core';
import {NodeService} from "../service/node.service";
import {TreeNode} from "primeng/api";
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-horizontal-tree',
  templateUrl: './horizontal-tree.component.html',
  styleUrls: ['./horizontal-tree.component.css']
})
export class HorizontalTreeComponent implements OnInit {
  displayDialog: boolean = false;
  files1: TreeNode[] = [];
  visible: boolean = false;


  constructor(private nodeService: NodeService) {
  }

  ngOnInit() {
    this.files1 = [
      {
        label: 'A',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'B',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: [
              {
                label: 'C',

                icon: 'pi pi-folder',
                children: [
                  {
                    label: 'file1',
                    icon: 'pi-file',
                    data: 'file1'
                  },
                  {
                    label: 'file2',
                    icon: 'pi-file',
                    data: 'file2'
                  }
                ]
              },
              {
                label: 'D',
                icon: 'pi pi-folder',
                children: [
                  {
                    label: 'file3',
                    icon: 'pi-file',
                    data: 'file3'
                  }
                ]
              },
            ],
          },
          {
            label: 'E',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            children: [
              {
                label: 'F',
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                children: [
                  {
                    label: 'file4',
                    icon: 'pi-file',
                    data: 'file4'
                  }
                ]
              },
            ],
          },
          {
            label: 'G',
            collapsedIcon: 'pi pi-folder',
            expandedIcon: 'pi pi-folder-open',
            children: [
              {
                label: 'H',
                icon: 'pi pi-folder',
                children: [
                  {
                    label: 'file5',
                    icon: 'pi-file',
                    data: 'file5'
                  }
                ]
              },
              {
                label: 'I',
                icon: 'pi pi-folder',
                children: [
                  {
                    label: 'file6',
                    icon: 'pi-file',
                    data: 'file6'
                  }
                ]
              },
              {
                label: 'J',
                icon: 'pi pi-folder',
                children: [
                  {
                    label: 'file7',
                    icon: 'pi-file',
                    data: 'file7'
                  }
                ]
              },
            ],
          },
        ],
      },
    ]
  }
  showDialog() {
    this.displayDialog = true;
    this.visible = true;
    console.log("hallo");
  }

}
