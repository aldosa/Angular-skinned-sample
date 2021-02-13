import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ACTIVITYDATA } from '../../staticData/activityData';
import { OnDutyActivity } from '../../domain/onDutyActivity';
import { OffDutyActivity } from '../../domain/offDutyActivity';
import { GenericActivity } from '../../domain/baseActivity';


export interface Cell {
  content: string;
}

export interface Row {
  //OffDuty: boolean[];
  Cells: Cell[];
}

@Component({
  selector: 'readonly-container',
  template: `
<table class="chp100d-display table">
  <tr>
    <th *ngFor="let cell of rows[1].Cells; let i = index;" style="width:70px; text-align: center;">
                        <div id="status-1285649" class="circle-legend" style="display: inline-block; background-color: #ffdd1a; text-align:center;"><a style="color: black;" nav="none" title="In process" (click)="edit(cell - 1)">P</a></div>&nbsp;<a title="delete this activity"><span class="fa fa-times" (click)="delete(cell - 1)"></span></a></th>    
  </tr>

  <!-- vacation/no vacation
  <ng-container>
    <tr>
      <ng-container *ngFor="let cells of rows[0].Cells; let i = index">
        <ng-container *ngIf="cells == true; else notVacation1">
            <td>v: {{rows[1].Cells[i]}}</td>
        </ng-container>
        <ng-template #notVacation1>
            <td>nv: {{rows[1].Cells[i]}}</td>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>
  -->
  <!-- activity number -->
  <ng-container>
    <tr>
      <ng-container *ngFor="let cells of rows[0].Cells; let i = index">
        <ng-container *ngIf="cells == true; else notVacation2">
            <td>{{rows[1].Cells[i]}}</td>
        </ng-container>
        <ng-template #notVacation2>
            <td>{{rows[1].Cells[i]}}</td>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>

  <!-- program with rowspan for vaction -->
  <ng-container>
    <tr>
      <ng-container *ngFor="let cells of rows[0].Cells; let i = index">
        <ng-container *ngIf="cells == true; else notVacation3">
            <td style="background-color:#cfe7cf; height:1095px;" [rowSpan]="rows.length">RDO</td>
        </ng-container>
        <ng-template #notVacation3>
            <td>{{rows[2].Cells[i]}}</td>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>

  <!-- inspection -->
  <ng-container>
    <tr>
      <ng-container *ngFor="let cells of rows[0].Cells; let i = index">
        <ng-container *ngIf="cells == true; else notVacation3">
            
        </ng-container>
        <ng-template #notVacation3>
            <td>{{rows[3].Cells[i]}}</td>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>  

  <!-- bit program -->
  <ng-container>
    <tr>
      <ng-container *ngFor="let cells of rows[0].Cells; let i = index">
        <ng-container *ngIf="cells == true; else notVacation3">
        </ng-container>
        <ng-template #notVacation3>

          <ng-container
            *ngIf="rows[4].Cells[i] == 'undefined'; then isUndefined; else checkNullBitProgram">
          </ng-container>
          <ng-template #isUndefined>
          </ng-template>

          <ng-template #checkNullBitProgram>
            <ng-container *ngIf="rows[4].Cells[i]; then isBitProgram;
            else isNotBitProgram">
            </ng-container>
            <ng-template #isNotBitProgram>
             <td>&nbsp;</td>
            </ng-template>
            <ng-template #isBitProgram>
             <td><span class="fa fa-check"></span></td>
            </ng-template>

          </ng-template>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>    

  <!-- remaining hour rows -->
  <ng-container *ngFor="let row of rows | slice: 5 : 21;  let i = index ">
    <tr>
      <ng-container *ngFor="let cell of rows[i + 5].Cells; let j = index">
        <ng-container *ngIf="rows[0].Cells[j] == true; else notVacation4">
            
        </ng-container>
        <ng-template #notVacation4>
          <td id="{{i}}-{{j}}" (click)="onClickMe(row, cell)" [innerHTML]="cell">
          </td>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>

  <!-- total container -->
  <ng-container>
    <tr>
      <ng-container *ngFor="let cells of rows[0].Cells; let i = index">
        <ng-container *ngIf="cells == true; else notVacation4">
            
        </ng-container>
        <ng-template #notVacation4>
            <td>{{rows[21].Cells[i].toFixed(1)}}</td>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>

  <!-- rate rows -->
  <ng-container *ngFor="let row of rows | slice: 22 : 23;  let i = index ">
    <tr>
      <ng-container *ngFor="let cell of rows[i + 22].Cells; let j = index">
        <ng-container *ngIf="rows[0].Cells[j] == true; else notVacation4">
            
        </ng-container>
        <ng-template #notVacation4>
          <td id="{{i}}-{{j}}" (click)="onClickMe(row, cell)" [innerHTML]="cell">
          </td>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>

  <!-- count -->
  <ng-container *ngFor="let row of rows | slice: 24 : 51;  let i = index ">
    <tr>
      <ng-container *ngFor="let cell of rows[i + 24].Cells; let j = index">
        <ng-container *ngIf="rows[0].Cells[j] == true; else notVacation4">
            
        </ng-container>
        <ng-template #notVacation4>
          <td id="{{i}}-{{j}}" (click)="onClickMe(row, cell)" [innerHTML]="cell">
          </td>
        </ng-template>
      </ng-container>
    </tr>
  </ng-container>    

</table>
  `,
  styles: [`
    
    table, tr, td{
      margin: 0; 
      text-align: center;
    }
    button {
      width:2px;
      height: 20px; 
    }

    div {
      display: inline-block;
    }
  `]
})
export class ReadonlyDataColumnsComponent {
  @Input() records: GenericActivity[];
  @Output() editRequest: EventEmitter<any> = new EventEmitter();
  @Output() deleteRequest: EventEmitter<any> = new EventEmitter();
  title: string;
  rows: Row[] = [];

  constructor() {
    this.title = "";
  }

  ngOnInit() {

    let activityNumberRow = { Cells: [] };
    let offDutyRow = { Cells: [] };
    let programRow = { Cells: [] };
    let inspectionRow = { Cells: [] };
    let bitProgramRow = { Cells: [] };
    let carrierRow = { Cells: [] };

    let mpRow = { Cells: [] };
    let drRow = { Cells: [] };
    let viRow = { Cells: [] };
    let ctiRow = { Cells: [] };
    let hmiRow = { Cells: [] };
    let isRow = { Cells: [] };
    let itRow = { Cells: [] };
    let piRow = { Cells: [] };
    let poiRow = { Cells: [] };
    let camRow = { Cells: [] };
    let aaRow = { Cells: [] };
    let tRow = { Cells: [] };
    let chpvRow = {Cells: [] };
    let oaoRow = { Cells: [] };
    let oaocRow = { Cells: [] };
    let totalsRow = { Cells: [] };

    let rtrRow = { Cells: [] };    
    let rcrRow = { Cells: [] };    
    let rudgRow = { Cells: [] };    
    let rc345Row = { Cells: [] };    

    let imrRow = { Cells: [] };    
    let idrRow = { Cells: [] };    
    let ivRow = { Cells: [] };    
    let ivrRow = { Cells: [] };    
    let iflctRow = { Cells: [] };    
    let ihwcRow = { Cells: [] };    
    let iucRow = { Cells: [] };    
    let icvsaRow = { Cells: [] };    
    let ivoosRow = { Cells: [] };    
    let vamprRow = { Cells: [] };    
    let vadrRow = { Cells: [] };    
    let vahosRow = { Cells: [] };    
    let vahmRow = { Cells: [] };    
    let vacsatRow = { Cells: [] };    

    let vvbRow = { Cells: [] };    
    let vvlsRow = { Cells: [] };    
    let vvcdRow = { Cells: [] };    
    let vvssRow = { Cells: [] };    
    let vvtwRow = { Cells: [] };    
    let vvemRow = { Cells: [] };    
    let vvctRow = { Cells: [] };    

    let smcstoRow = { Cells: [] };    
    let snohiRow = { Cells: [] };    
    let sefRow = { Cells: [] }; 
    
    this.records.forEach((obj, index) => {
      offDutyRow.Cells.push(obj.isHoliday);
      activityNumberRow.Cells.push(obj.activityNumber);

      //console.log("rodc init: " , obj, index);

      let oda = <OnDutyActivity>obj;

      let hourTotals:number = 
          this.toDecimal(oda.dutyHours_Inspection_Carrier)
        + this.toDecimal(oda.dutyHours_Inspection_MaintenanceProgram)
        + this.toDecimal(oda.dutyHours_Inspection_DriverRecords)
        + this.toDecimal(oda.dutyHours_Inspection_VehicleInspection)
        + this.toDecimal(oda.dutyHours_Inspection_ContainerTankInspection)
        + this.toDecimal(oda.dutyHours_Inspection_HazardousMaterialInspection)
        + this.toDecimal(oda.dutyHours_Inspection_Scheduling)
        + this.toDecimal(oda.dutyHours_Inspection_Travel)
        + this.toDecimal(oda.dutyHours_OtherActivities_PreInspection)
        + this.toDecimal(oda.dutyHours_OtherActivities_PostInspection)
        + this.toDecimal(oda.dutyHours_OtherActivities_CIIAIIMAIT)
        + this.toDecimal(oda.dutyHours_OtherActivities_AdminAction)
        + this.toDecimal(oda.dutyHours_OtherActivities_Training)
        + this.toDecimal(oda.dutyHours_OtherActivities_CHPVehicleMaintenance)
        + this.toDecimal(oda.dutyHours_OtherActivities_Other)
        
        ;
      
      programRow.Cells.push(oda.type_Program);
      inspectionRow.Cells.push(oda.type_Inspection);
      bitProgramRow.Cells.push(oda.type_BitProgram);

      carrierRow.Cells.push(this.getHours(oda.dutyHours_Inspection_Carrier));
      mpRow.Cells.push(this.getHours(oda.dutyHours_Inspection_MaintenanceProgram));
      drRow.Cells.push(this.getHours(oda.dutyHours_Inspection_DriverRecords));
      viRow.Cells.push(this.getHours(oda.dutyHours_Inspection_VehicleInspection));
      ctiRow.Cells.push(this.getHours(oda.dutyHours_Inspection_ContainerTankInspection));
      hmiRow.Cells.push(this.getHours(oda.dutyHours_Inspection_HazardousMaterialInspection));
      isRow.Cells.push(this.getHours(oda.dutyHours_Inspection_Scheduling));
      itRow.Cells.push(this.getHours(oda.dutyHours_Inspection_Travel));
      piRow.Cells.push(this.getHours(oda.dutyHours_OtherActivities_PreInspection));
      poiRow.Cells.push(this.getHours(oda.dutyHours_OtherActivities_PostInspection));
      camRow.Cells.push(this.getHours(oda.dutyHours_OtherActivities_CIIAIIMAIT));
      aaRow.Cells.push(this.getHours(oda.dutyHours_OtherActivities_AdminAction));
      tRow.Cells.push(this.getHours(oda.dutyHours_OtherActivities_Training));
      chpvRow.Cells.push(this.getHours(oda.dutyHours_OtherActivities_CHPVehicleMaintenance));
      oaoRow.Cells.push(this.getHours(oda.dutyHours_OtherActivities_Other));

      if (typeof oda.dutyHours_OtherActivities_OtherComments == 'undefined')
        oda.dutyHours_OtherActivities_OtherComments = "&nbsp;";

      oaocRow.Cells.push(oda.dutyHours_OtherActivities_OtherComments.length != 0 ? "..." : "&nbsp;");

      totalsRow.Cells.push(hourTotals);

      rtrRow.Cells.push((oda.rate_TerminalRating == 'undefined' || !oda.rate_TerminalRating) ? "&nbsp;":oda.rate_TerminalRating);
      rcrRow.Cells.push(oda.rate_CarrierRating == 'undefined' || !oda.rate_CarrierRating ? "&nbsp;" : oda.rate_CarrierRating);
      rudgRow.Cells.push(oda.rate_UpDownGrade == 'undefined' || !oda.rate_UpDownGrade ? "&nbsp;" : oda.rate_UpDownGrade);
      rc345Row.Cells.push(this.getCounts(oda.rate_CHP345Issued));

      imrRow.Cells.push(this.getCounts(oda.inspectionItems_MaintenanceRecords));
      idrRow.Cells.push(this.getCounts(oda.inspectionItems_DriverRecords));
      ivRow.Cells.push(this.getCounts(oda.inspectionItems_Vehicles));
      ivrRow.Cells.push(this.getCounts(oda.inspectionItems_VehicleReinsp));
      iflctRow.Cells.push(this.getCounts(oda.inspectionItems_FLCargoTank));
      ihwcRow.Cells.push(this.getCounts(oda.inspectionItems_HWContainer));
      iucRow.Cells.push(this.getCounts(oda.inspectionItems_UnitsCertified));
      icvsaRow.Cells.push(this.getCounts(oda.inspectionItems_CVSA));
      ivoosRow.Cells.push(this.getCounts(oda.inspectionItems_VehicleOOS));

      vamprRow.Cells.push(this.getCounts(oda.Violations_Admin_MaintenanceProgramRecords));
      vadrRow.Cells.push(this.getCounts(oda.Violations_Admin_DriverRecords));
      vahosRow.Cells.push(this.getCounts(oda.Violations_Admin_HoursOfService));
      vahmRow.Cells.push(this.getCounts(oda.Violations_Admin_HazMaterials));
      vacsatRow.Cells.push(this.getCounts(oda.Violations_Admin_CSAT));

      vvbRow.Cells.push(this.getCounts(oda.Violations_Vehicle_Brakes));
      vvlsRow.Cells.push(this.getCounts(oda.Violations_Vehicle_LampsSignals));
      vvcdRow.Cells.push(this.getCounts(oda.Violations_Vehicle_ConnectingDevices));
      vvssRow.Cells.push(this.getCounts(oda.Violations_Vehicle_SteeringAndSuspension));
      vvtwRow.Cells.push(this.getCounts(oda.Violations_Vehicle_TiresAndWheels));
      vvemRow.Cells.push(this.getCounts(oda.Violations_Vehicle_EquipmentMaintenance));
      vvctRow.Cells.push(this.getCounts(oda.Violations_Vehicle_ContainerTank));

      smcstoRow.Cells.push(this.getCounts(oda.Spec_MCSTO));
      snohiRow.Cells.push(this.getCounts(oda.Spec_NumberOfHighwayInspections));

      if (typeof oda.Spec_EmptyField == 'undefined' || !oda.Spec_EmptyField)
        oda.Spec_EmptyField = "&nbsp;";

      sefRow.Cells.push(oda.Spec_EmptyField.length != 0 ? "..." : "&nbsp;");

    });

    this.rows.push(offDutyRow);
    this.rows.push(activityNumberRow);
    this.rows.push(programRow);
    this.rows.push(inspectionRow);
    this.rows.push(bitProgramRow);
    this.rows.push(carrierRow);

    this.rows.push(mpRow);
    this.rows.push(drRow);
    this.rows.push(viRow);
    this.rows.push(ctiRow);
    this.rows.push(hmiRow);
    this.rows.push(isRow);
    this.rows.push(itRow);
    this.rows.push(piRow);
    this.rows.push(poiRow);
    this.rows.push(camRow);
    this.rows.push(aaRow);
    this.rows.push(tRow);
    this.rows.push(chpvRow);
    this.rows.push(oaoRow);
    this.rows.push(oaocRow);
    this.rows.push(totalsRow);

    this.rows.push(rtrRow);
    this.rows.push(rtrRow);
    this.rows.push(rcrRow);
    this.rows.push(rudgRow);
    this.rows.push(rc345Row);   

    this.rows.push(imrRow);   
    this.rows.push(idrRow);   
    this.rows.push(ivRow);   
    this.rows.push(ivrRow);   
    this.rows.push(iflctRow);   
    this.rows.push(ihwcRow);   
    this.rows.push(iucRow);   
    this.rows.push(icvsaRow);   
    this.rows.push(ivoosRow);   
    this.rows.push(vamprRow);   
    this.rows.push(vadrRow);   
    this.rows.push(vahosRow);   
    this.rows.push(vahmRow);   
    this.rows.push(vacsatRow);   

    this.rows.push(vvbRow);   
    this.rows.push(vvlsRow);  
    this.rows.push(vvcdRow);  
    this.rows.push(vvssRow);   
    this.rows.push(vvtwRow);   
    this.rows.push(vvemRow);   
    this.rows.push(vvctRow);   

    this.rows.push(smcstoRow);   
    this.rows.push(snohiRow);   
    this.rows.push(sefRow);   
    
    console.log("rodc init rows : ", this.rows);
  };

  delete(i: number) {
    
    if (confirm("Confirm you want to delete activity " + (i + 1))) {
      console.info("rodc: sending delete requested on " + i);
      this.deleteRequest.emit(i);
    }
  }

  edit(i: number) {
    console.info("rodc: sending edit requested on " + i);
    this.editRequest.emit(i);
  }

  getCounts(value: any) {
    //return !Number.isInteger(value) ? "&nbsp;" : <number>value;
    return !this.IsInteger(value) ? "&nbsp;" : <number>value;
  }

  getHours(value: any) {
    //console.log("rodc: ", value);
    if (typeof value == 'undefined') return "&nbsp";
    let testValue = parseFloat(value.toString());
    //if (Number.isNaN(testValue)) return "&nbsp;";
    if (this.IsNaN(testValue)) return "&nbsp;";
    if (value == 0) return "&nbsp;";
    return testValue.toFixed(1);
  }

  IsInteger(value: any) {
    return (value ^ 0) === +value;
  }  

  IsNaN(o) {
    return o !== o;
  }

  onClickMe(row: string, column) {
    console.info("rodc: clicked on " + row + " " + column);
  }

  toDecimal(value: number):number {   
    if (typeof value == 'undefined') return 0.0;
    let testValue = parseFloat(value.toString());
    //if (Number.isNaN(testValue)) return 0.0;
    if (this.IsNaN(testValue)) return 0.0; 
    return testValue;
  }    

  toInteger(value: number):number {
    //return Number.isInteger(<number>(value)) ? <number>(value) : 0;
    return this.IsInteger(<number>(value)) ? <number>(value) : 0;
  }

}