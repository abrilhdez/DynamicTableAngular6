import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
	selector: 'app-generic-table',
	templateUrl: './generic-table.component.html',
	styleUrls: ['./generic-table.component.css']
})


export class GenericTableComponent implements OnInit {
	displayedColumns = ['select','title', 'value', 'col1', 'col2'];
	dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
	tableConfiguration = CONFIGURATION;
	columnsConfiguration = COLUMNS_CONFIGURATION;
	selection = new SelectionModel<any>(true, []);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	/** Whether the number of selected elements matches the total number of rows. */
	isAllSelected() {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;
		return numSelected === numRows;
	}

	/** Selects all rows if they are not all selected; otherwise clear selection. */
	masterToggle() {
		this.isAllSelected() ?
			this.selection.clear() :
			this.dataSource.data.forEach(row => this.selection.select(row));
	}

}



const ELEMENT_DATA: any[] = [
	{
		title: "% AVANCE DEL PLAN DE TRABAJO",
		value: "0.877",
		col1: "0.18",
		col2: "0.2",
		col3: "0.22",
		col4: "0.24",
		editable: "1",
		is_total: "0"
	},
	{
		title: "% AVANCE SEMANAL",
		value: "0.79500000000000004",
		col1: "0.18",
		col2: "2.0000000000000018E-2",
		col3: "1.999999999999999E-2",
		col4: "1.999999999999999E-2",
		editable: "0",
		is_total: "0"
	},
	{
		title: "ESFUERZO EN HORAS ESPERADO",
		value: "5137.2000000000016",
		col1: "1075.1400000000001",
		col2: "119.46000000000009",
		col3: "119.45999999999995",
		col4: "119.45999999999995",
		editable: "0",
		is_total: "0"
	},
	{
		title: "HC ESPERADO",
		value: "",
		col1: "1075.1400000000001",
		col2: "7.4662500000000058",
		col3: "2.9864999999999986",
		col4: "2.9864999999999986",
		editable: "0",
		is_total: "0"
	},
	{
		title: "INGRESO",
		value: "3049411.551",
		col1: "508177.8",
		col2: "56464.200000000048",
		col3: "56464.199999999975",
		col4: "56464.199999999975",
		editable: "0",
		is_total: "0"
	},
	{
		title: "COSTO",
		value: "1616030.394839348",
		col1: "256713.86789058306",
		col2: "11879.616987999287",
		col3: "29323.072512280465",
		col4: "32116.821650300564",
		editable: "0",
		is_total: "0"
	},
	{
		title: "RENTABILIDAD",
		value: "1433381.1561606519",
		col1: "251463.93210941693",
		col2: "44584.583012000759",
		col3: "27141.12748771951",
		col4: "24347.378349699411",
		editable: "0",
		is_total: "0"
	},
	{
		title: "MARGEN",
		value: "0.47005172381228771",
		col1: "0.49483454828096962",
		col2: "0.78960798190713266",
		col3: "0.4806785093514036",
		col4: "0.43120027113993331",
		editable: "0",
		is_total: "0"
	},
	{
		title: "POR SEMANA INGRESOS",
		value: "3049412",
		col1: "0",
		col2: "0",
		col3: "0",
		col4: "0",
		editable: "0",
		is_total: "1"
	}];

const CONFIGURATION: any = {
	filter_activate: true,
	export: {
		enabled: true,
		formats: ".csv, .xlsx"
	},
	stickyHeader: false,
	frezze_column: 0,
	allow_select_all_rows: true,
	can_edit: true,
	can_delete: true,
	can_add: true,
	pagination: {
		enabled: true,
		items_per_page: ''
	}
};
const COLUMNS_CONFIGURATION: any[] = [
	{
		column_index: 0,
		fieldname: "title",
		title: "Nombre",
		type: null,
		listitems: [
			{
				"key": 0,
				"value": ""
			}
		],
		is_hidden: false,
		sticky: true,
		stickyEnd: false,
		type_data: "int",
		mask: "",
		allow_sort: false,
		readonly: false
	},
	{
		column_index: 1,
		fieldname: "value",
		title: "Porcentaje",
		type: "calendar",
		is_hidden: false,

		sticky: false,
		stickyEnd: false,
		type_data: "date",
		mask: "P0",
		allow_sort: true,
		readonly: false
	},
	{
		column_index: 2,
		fieldname: "col1",
		title: "col1",
		type: "checkbox",
		is_hidden: false,

		sticky: false,
		stickyEnd: false,
		type_data: "bool",
		mask: "n2",
		allow_copy: true,
		allow_paste: true,
		allow_sort: true,
		readonly: false
	},
	{
		column_index: 2,
		fieldname: "col2",
		title: "col2",
		type: "checkbox",
		is_hidden: false,

		sticky: false,
		stickyEnd: false,
		type_data: "bool",
		mask: "n2",

		allow_sort: false,
		readonly: false
	}
];