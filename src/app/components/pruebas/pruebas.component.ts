import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/node.service';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';





interface Column {
  field: string;
  header: string;
}


interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-pruebas',
  imports: [TreeTableModule, ButtonModule, CommonModule],
  templateUrl: './pruebas.component.html',
  standalone: true,
  styleUrl: './pruebas.component.scss',
  providers: [NodeService]
})
export class PruebasComponent {
  files!: TreeNode[];

  cols!: Column[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
      this.nodeService.getFilesystem()
      .then((files) => (this.files = files));
      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' },
          { field: '', header: '' }
      ];
  }



}
