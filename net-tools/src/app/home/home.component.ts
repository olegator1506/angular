import { Component } from '@angular/core';



//class TFixedField

type TFixedField = {
	id: string
	title: string
	group: boolean
};

type TValuedField = {
	id: string
	title: string
};



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
	protected _fixedFields : TFixedField[];
	protected _valuedFields : TValuedField[];
  protected message: string = "Test";
	constructor() {
		this._fixedFields = [
			{id:'src_addr',title:'Source IP',group:true},
			{id:'dst_addr',title:'Destination IP',group:true},
			{id:'protocol',title:'Protocol',group:false},
			{id:'src_port',title:'Src.port',group:false},
			{id:'dst_port',title:'Dst.port',group:false},
			{id:'src_mask',title:'Src.mask',group:false},
			{id:'dst_mask',title:'Dst.mask',group:false},
			{id:'nexthop',title:'Next hop',group:false},
			{id:'if_in',title:'IF In',group:false},
			{id:'if_out',title:'IF Out',group:false}
		];
		this._valuedFields = [
			{id:'bytes',title:'Bytes'},
			{id:'packets',title:'Packets'},
			{id:'start',title:'Start time'},
			{id:'duration',title:'Duration'},
			{id:'pct',title:'% of total'}
		];
	
	}; 
}

