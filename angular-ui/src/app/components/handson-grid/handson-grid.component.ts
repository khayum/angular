import { Component } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-handson-grid',
  templateUrl: './handson-grid.component.html',
  styleUrls: ['./handson-grid.component.css']
})
export class HandsonGridComponent {
  hotSettings: Handsontable.GridSettings = {
    data: [
      ['A1', 'B1', 'C1'],
      ['A2', 'B2', 'C2']
    ],
    colHeaders: true,
    rowHeaders: true
  };
  
}
