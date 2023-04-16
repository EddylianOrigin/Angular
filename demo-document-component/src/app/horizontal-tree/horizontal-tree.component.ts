import {Component, OnInit} from '@angular/core';
import {NodeService} from "../service/node.service";
import {TreeNode} from "primeng/api";
import {observable} from "rxjs";
import {parse} from "@typescript-eslint/parser";


@Component({
  selector: 'app-horizontal-tree',
  templateUrl: './horizontal-tree.component.html',
  styleUrls: ['./horizontal-tree.component.css']
})
export class HorizontalTreeComponent implements OnInit {
  displayDialog: boolean = false;
  files1: TreeNode[] = [];
  visible1: boolean = false;
  visible2: boolean = false;
  treeData: TreeNode[] = [
    // the tree data you provided
  ];

  keysWithF: string[] = [];
  keysWithoutF: string[] = [];
  node: any;

  constructor(private nodeService: NodeService) {
  }

  ngOnInit() {
    this.files1 = [
      {
        label: 'A',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        key:'1',
        type:'folder',
        children: [
          {
            label: 'B',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            key: '2',
            type:'folder',
            children: [
              {
                label: 'C',
                icon: 'pi pi-folder',
                key: '3',
                type:'folder',
                children: [
                  {
                    label: 'file1',
                    icon: 'pi pi-file',
                    data: 'file1',
                    key: '1f',
                    type:'file',
                  },
                  {
                    label: 'file2',
                    icon: 'pi pi-file',
                    data: 'file2',
                    key: '2f',
                    type:'file',
                  }
                ]
              },
              {
                label: 'D',
                icon: 'pi pi-folder',
                key: '4',
                type:'folder',
                children: [
                  {
                    label: 'file3',
                    icon: 'pi pi-file',
                    data: 'file3',
                    key: '3f',
                    type:'file',
                  }
                ]
              },
            ],
          },
          {
            label: 'E',
            expandedIcon: 'pi pi-folder-open',
            collapsedIcon: 'pi pi-folder',
            key: '5',
            type:'folder',
            children: [
              {
                label: 'F',
                expandedIcon: 'pi pi-folder-open',
                collapsedIcon: 'pi pi-folder',
                key: '6',
                type:'folder',
                children: [
                  {
                    label: 'file4',
                    icon: 'pi pi-file',
                    data: 'file4',
                    key: '4f',
                    type:'file',
                  }
                ]
              },
            ],
          },
          {
            label: 'G',
            collapsedIcon: 'pi pi-folder',
            expandedIcon: 'pi pi-folder-open',
            key: '7',
            type:'folder',
            children: [
              {
                label: 'H',
                icon: 'pi pi-folder',
                type:'folder',
                children: [
                  {
                    label: 'file5',
                    icon: 'pi pi-file',
                    data: 'file5',
                    key: '5f',
                    type:'file',
                  }
                ]
              },
              {
                label: 'I',
                icon: 'pi pi-folder',
                key: '8',
                type:'folder',
                children: [
                  {
                    label: 'file6',
                    icon: 'pi pi-file',
                    data: 'file6',
                    key: '6f',
                    type:'file',
                  }
                ]
              },
              {
                label: 'J',
                icon: 'pi pi-folder',
                key: '9',
                type:'folder',
                children: [
                  {
                    label: 'file7',
                    icon: 'pi pi-file',
                    data: 'file7',
                    key: '7f',
                  }
                ]
              },
            ],
          },
        ],
      },
    ];
    this.traverseTree(this.files1);
  }
  traverseTree(nodes: TreeNode[]) {
    for (const node of nodes) {
      if (node.key?.endsWith('f')) {
        //this.visible1 = true;
        this.keysWithF.push(node.key);
      } else {
        if (node.key != null) {
          //this.visible2 = true;
          this.keysWithoutF.push(node.key);
        }
      }
      if (node.children) {
        this.traverseTree(node.children);
      }
    }
  }
  getvisible(node: TreeNode) {
    if (node.type === 'folder') {
      return this.visible1=true;
    } else if (node.type === 'file') {
      return this.visible2=true;
    }
    return false;
  }
/*  onNodeSelect(event:any){
    actuellnode: any;

    console.log(event.subscribe((obj: any) => {
      const
    }));
  }*/
/*  doSomething(event: { stopPropagation: () => void; }, item: any){
    event.stopPropagation();
    // as before you had
  }*/
/*  showDialog1() {
   // this.displayDialog = true;
/!*    for(let a of this.keysWithF) {

      this.visible2=true;
      console.log(a);
    }*!/
    if(){
      return "visible1=true";
    } else  {
      return "visible2=true";
    }*/

  /*  for(let b of this.keysWithoutF) {

  //    this.visible1=true;
    }*/


// Filtered arrays
/*    const keysWithF = this.files1.filter(obj => obj.key?.endsWith('f'));
    const keysWithoutF = this.files1.filter(obj => !obj.key?.endsWith('f'));
 */


// loop through the nodes
/*    for (let node of this.files1) {
      // check if the key ends with "f"
      if (node.key?.endsWith("f")) {
        // add the key to the list of keys with "f"
        keysWithF.push(node.key);
      } else {
        // add the key to the list of keys without "f"
        if (node.key != null) {
          keysWithoutF.push(node.key);
        }
      }
    }*/

   // console.log("hallo");
  }


