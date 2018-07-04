import { Component, OnInit } from '@angular/core';
import { ConsumeService } from '../services/consume.service';
import { DataService } from '../services/data.service';
import { Table } from '../generic-table2/table';
@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css']
})
export class ExampleTableComponent implements OnInit {
  isLoading = false;
  constructor(private _consumeService: ConsumeService,
    private _dataService: DataService) {
    this._dataService
      .getIsLoadingEvent()
      .subscribe(isLoad => this.isLoading = isLoad);
  }

  ngOnInit(): void {
    this._dataService.setIsLoadingEvent(true);
    this.getData();
    this.getTableConfig();
    this.getColumnsConfig();
  }

  url_data = '../../assets/data.json';
  url_tableConfig = '../../assets/table-config.json';
  url_columnsConfig = '../../assets/columns-config.json';

  table: Table = {
    source: [],
    columns: [],
    config: {}
  };
  dataok: boolean;
  tableok: boolean;
  columnsok: boolean;


  getData() {
    this._consumeService.getJSON(this.url_data).subscribe((response) => {
      this.table.source = response;
      this.dataok = true;
      if (this.dataok && this.tableok && this.columnsok == true)
        this._dataService.setIsLoadingEvent(false);

    }, (err) => {
      console.error(err);
      this._dataService.setIsLoadingEvent(false);
    })
  }
  getTableConfig() {
    this._consumeService.getJSON(this.url_tableConfig).subscribe((response) => {
      this.table.config = response;
      this.tableok = true;
      if (this.dataok && this.tableok && this.columnsok == true)
        this._dataService.setIsLoadingEvent(false);

    }, (err) => {
      console.error(err);
      this._dataService.setIsLoadingEvent(false);
    })
  }
  getColumnsConfig() {
    this._consumeService.getJSON(this.url_columnsConfig).subscribe((response) => {
      this.table.columns = response;
      this.columnsok = true;
      if (this.dataok && this.tableok && this.columnsok == true)
        this._dataService.setIsLoadingEvent(false);


    }, (err) => {
      console.error(err);
      this._dataService.setIsLoadingEvent(false);
    })
  }

}
