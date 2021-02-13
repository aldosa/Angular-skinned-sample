import {
  Component, Input, Output, NgModule, ComponentFactoryResolver,
  ViewChild, ViewContainerRef, ComponentFactory, EventEmitter,
} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ReadonlyDataColumnsComponent } from './columns/readonlyDataColumns.component';
import { EditableActivityComponent } from './columns/editableActivity.component';
import { TotalsComponent } from './columns/totalsColumn.component';

import { OnDutyActivity } from '../domain/onDutyActivity';
import { OffDutyActivity } from '../domain/offDutyActivity';
import { GenericActivity } from '../domain/baseActivity';
import { ACTIVITYDATA } from '../staticData/activityData';
import { Header, HEADER_DATA } from '../staticData/headerData';

export interface Cell {
  content: string;
  rowspan: number;
}

export interface Row {
  Cells: Cell[];
}

@Component({
  selector: 'grid',
  styleUrls: ['grid.component.css'],
  templateUrl: 'grid.component.html',
  encapsulation: ViewEncapsulation.None
})

export class Grid {

  name: string;
  @ViewChild('formerActivities', { read: ViewContainerRef }) formerContainer: ViewContainerRef;
  @ViewChild('editableActivity', { read: ViewContainerRef }) editableActivity: ViewContainerRef;
  @ViewChild('latterActivities', { read: ViewContainerRef }) latterContainer: ViewContainerRef;
   @ViewChild('totals', { read: ViewContainerRef }) totalsContainer: ViewContainerRef;
  constructor(
    private compFactoryResolver: ComponentFactoryResolver
  ) {
    this.name = ''
  }

  totalEstimate = 10;
  ctx = { estimate: this.totalEstimate };

  rows: Row[] = [];
  readOnlyEventSubscription: any;

  readAhead: GenericActivity[] = ACTIVITYDATA;
  readBehind: GenericActivity[];

  activityData: GenericActivity[] = ACTIVITYDATA;
  headerData: Header[] = HEADER_DATA;
  renderedHtml: string = '<button (click)="onClickMe()">+</button></td>{{addColumn}}';
  addColumn: string;

  addNewActivity() {

    this.renderGrid(ACTIVITYDATA.length);
  }

  ngOnInit() {
    this.renderHeader();
    this.renderGrid(-1);

  };

  renderGrid(requestedEditIndex: number) {
    this.formerContainer.clear();
    this.latterContainer.clear();
    this.editableActivity.clear();
    this.totalsContainer.clear();

    //console.info("requested edit: " + requestedEditIndex);

    let compFactory: ComponentFactory;
    compFactory = this.compFactoryResolver.resolveComponentFactory(ReadonlyDataColumnsComponent);

    switch (requestedEditIndex) {
      //reset of grid
      case -1: {
        this.readAhead = this.activityData;
        let formerRef = this.formerContainer.createComponent(compFactory);
        formerRef.instance.records = this.readAhead;
        formerRef.instance.editRequest.subscribe(x => this.requestedEdit(x));
        formerRef.instance.deleteRequest.subscribe(x => this.requestedDelete(x));

        compFactory = this.compFactoryResolver.resolveComponentFactory(TotalsComponent);
        let totalRef = this.totalsContainer.createComponent(compFactory);
        totalRef.instance.records = this.activityData;

        break;
      }

      //add new activity
      case this.activityData.length:
      {
        let formerRecordCount = requestedEditIndex;
        this.readAhead = this.activityData.slice(0, formerRecordCount);

        let formerRef = this.formerContainer.createComponent(compFactory);
        formerRef.instance.records = this.readAhead;
        formerRef.instance.editRequest.subscribe(x => this.requestedEdit(x));
        formerRef.instance.deleteRequest.subscribe(x => this.requestedDelete(x));

        compFactory = this.compFactoryResolver.resolveComponentFactory(EditableActivityComponent);
        let editableRef = this.editableActivity.createComponent(compFactory);
        editableRef.instance.record = {dayNumber: 1, type_Program: '', type_Inspection: '', type_BitProgram: false, dutyHours_Inspection_Carrier: 0.0 };
        editableRef.instance.activityModified.subscribe(x => this.requestedModifyActivity(x));
        editableRef.instance.editRequest.subscribe(x => this.requestedEdit(x));     

        compFactory = this.compFactoryResolver.resolveComponentFactory(TotalsComponent);
        let totalRef = this.totalsContainer.createComponent(compFactory);
        totalRef.instance.records = this.activityData;

        break;
      }

      default: {
        let formerRecordCount = requestedEditIndex;
        this.readAhead = this.activityData.slice(0, formerRecordCount);
        this.readBehind = this.activityData.slice(formerRecordCount + 1, this.activityData.length);

        let formerRef = this.formerContainer.createComponent(compFactory);
        formerRef.instance.records = this.readAhead;
        formerRef.instance.editRequest.subscribe(x => this.requestedEdit(x));
        formerRef.instance.deleteRequest.subscribe(x => this.requestedDelete(x));

        let latterRef = this.latterContainer.createComponent(compFactory);
        latterRef.instance.records = this.readBehind;
        latterRef.instance.editRequest.subscribe(x => this.requestedEdit(x));
        latterRef.instance.deleteRequest.subscribe(x => this.requestedDelete(x));

       compFactory = this.compFactoryResolver.resolveComponentFactory(EditableActivityComponent);
        let editableRef = this.editableActivity.createComponent(compFactory);
        editableRef.instance.record = this.activityData[formerRecordCount];
        editableRef.instance.activityModified.subscribe(x => this.requestedModifyActivity(x));
        editableRef.instance.editRequest.subscribe(x => this.requestedEdit(x));     

        compFactory = this.compFactoryResolver.resolveComponentFactory(TotalsComponent);
        let totalRef = this.totalsContainer.createComponent(compFactory);
        totalRef.instance.records = this.activityData;

      }

    }

  }

  requestedEdit(index: number) {
    console.log("g: received grid render with index " + index);
    this.renderGrid(index);
  }

  requestedDelete(index: number) {
    console.log("g: receiving delete requested on " + index);
    this.activityData.splice(index, 1);

    for(var i:number = index; i < this.activityData.length; i++)
    {
      //console.info(" -> " + i);
      this.activityData[i].activityNumber = i + 1;
      //console.info(this.activityData[i]);
      //    
    }

    this.renderGrid(-1);
  }

  requestedModifyActivity(item: OnDutyActivity)
  {
      console.log("g: received activity modify request for ", item);
      if (item.id == undefined){
        if (this.activityData.length > 0) {
          item.id = this.activityData[this.activityData.length - 1].id + 1;
          item.activityNumber = this.activityData[this.activityData.length - 1].activityNumber + 1;
        }
        else {
          item.id = 1;
          item.activityNumber = 1;
        }

        this.activityData.push(<OnDutyActivity>item);
      }
      else {
      let index:number = this.activityData.findIndex(x => x.id == item.id);
      this.activityData.splice(index, 1, item);
      }

      console.log("g: final set: ", this.activityData);

  }

  renderHeader() {

    this.headerData.forEach((obj, index) => {
      let row = { Cells: [] };
      row.Cells.push({ content: obj.header, rowspan: 1 });
      row.Cells.push({ content: obj.subheader, rowspan: 1 });
      row.Cells.push({ content: obj.label, rowspan: 1 });

      this.rows.push(row);
    });

  }

  onClickMe(row: string, column) {
    console.info("g: clicked on " + row + column);
  }



}

