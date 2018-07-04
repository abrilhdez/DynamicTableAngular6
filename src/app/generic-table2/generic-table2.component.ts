import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { TableDataSource } from '../table/table-data-source';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Table } from './table';

@Component({
  selector: 'app-generic-table2',
  templateUrl: './generic-table2.component.html',

  styleUrls: ['./generic-table2.component.css']
})
export class GenericTable2Component implements OnInit {

  constructor() { }

  @Input() table: Table;
  @Output() dataChange = new EventEmitter<any[]>();

  dataSource: TableDataSource;
  tableConfiguration :any;
  columnsConfiguration :any[];

  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource = new TableDataSource(this.table.source, this.table.config, this.table.columns);
    console.log(this.dataSource);

    this.dataSource.datasourceSubject
    .subscribe(
      data => {
        this.dataChange.emit(data);
    
      }
    );

  }


  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }
}
