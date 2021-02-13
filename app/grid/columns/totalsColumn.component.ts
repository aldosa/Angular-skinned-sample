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
  Cells: number[];
}

@Component({
  selector: 'totals-container',
  template: `
<table class="table" style="background-color: lightgray;">
  <tr><td style="">TOTAL</td></tr>
  <tr><td style="height: 116px;">&nbsp;</td></tr>
  <tr *ngFor="let cell of row.Cells | slice: 0 : 16; let i = index;">
    <td>
      {{cell != 0 ? cell.toFixed(1) : "&nbsp;"}}
    </td>    
  </tr>
  <tr *ngFor="let cell of row.Cells | slice: 16 : 50; let i = index;">
    <td>
      {{cell != 0 ? cell : "&nbsp;"}}
    </td>    
  </tr>


</table>
  `,
  styles: [`
    tr:nth-child(even) {background-color: lightgray;}
    table, tr, td {
      margin: 0; 
      text-align: right;

    }
    button {
      width:2px;
      height: 20px; 
    }

  `]
})
export class TotalsComponent {
  @Input() records: GenericActivity[];
  title: string;
  row: Row = <Row>{};

  constructor() {
    this.title = "";
  }

  ngOnInit() {
    this.row.Cells = [];
    let carrierCell:number  = 0;
    let mpCell:number       = 0;
    let drCell:number       = 0;
    let viCell:number       = 0;
    let ctiCell:number      = 0;
    let hmiCell:number      = 0;
    let isCell:number       = 0;
    let traCell:number      = 0;
    let piCell:number       = 0;
    let poiCell:number      = 0;
    let camCell:number      = 0;
    let aaCell:number       = 0;
    let tCell:number        = 0;
    let oavmCell:number     = 0;
    let oaoCell:number      = 0;
    let oaocCell:number     = 0;
    let totalsCell:number   = 0;

    let trCell:number       = 0;
    let crCell:number       = 0;
    let udCell:number       = 0;
    let chp345Cell:number   = 0;

    let mCell:number        = 0;
    let dCell:number        = 0;
    let vCell:number        = 0;
    let vrCell:number       = 0;
    let flctCell:number     = 0;
    let hwcCell:number      = 0;
    let ucCell:number       = 0;
    let cvsaCell:number     = 0;
    let voosCell:number     = 0;

    let vamprCell:number    = 0;
    let vadrCell:number     = 0;
    let vahosCell:number    = 0;
    let vahzCell:number     = 0;
    let vacsatCell:number   = 0;
    let vvbCell:number      = 0;
    let vvlsCell:number     = 0;
    let vvcdCell:number     = 0;
    let vvssCell:number     = 0;
    let vvtwCell:number     = 0;
    let vvemCell:number     = 0;
    let vvctCell:number     = 0;

    let smCell:number       = 0;
    let snCell:number       = 0;
    let sefCell:number      = 0;

    this.records.forEach((obj, index) => {
      if (obj.isHoliday) return;

      let oda = <OnDutyActivity>obj;


      carrierCell += this.getHours(oda.dutyHours_Inspection_Carrier);
      mpCell      += this.getHours(oda.dutyHours_Inspection_MaintenanceProgram);
      drCell      += this.getHours(oda.dutyHours_Inspection_DriverRecords);
      viCell      += this.getHours(oda.dutyHours_Inspection_VehicleInspection);

      ctiCell     += this.getHours(oda.dutyHours_Inspection_ContainerTankInspection);
      hmiCell     += this.getHours(oda.dutyHours_Inspection_HazardousMaterialInspection);
      isCell      += this.getHours(oda.dutyHours_Inspection_Scheduling);
      traCell     += this.getHours(oda.dutyHours_Inspection_Travel);

      piCell      += this.getHours(oda.dutyHours_OtherActivities_PreInspection);
      poiCell     += this.getHours(oda.dutyHours_OtherActivities_PostInspection);
      camCell     += this.getHours(oda.dutyHours_OtherActivities_CIIAIIMAIT);
      aaCell      += this.getHours(oda.dutyHours_OtherActivities_AdminAction);
      tCell       += this.getHours(oda.dutyHours_OtherActivities_Training);
      oavmCell    += this.getHours(oda.dutyHours_OtherActivities_CHPVehicleMaintenance);
      oaoCell     += this.getHours(oda.dutyHours_OtherActivities_Other);
      oaocCell    += 0;
      totalsCell  += this.getHours(oda.dutyHours_Totals);
      trCell      += this.getTerminalCarrierCounts(oda.rate_TerminalRating);
      crCell      += this.getTerminalCarrierCounts(oda.rate_CarrierRating);
      udCell      += this.getUpDownRatingCounts(oda.rate_UpDownGrade);
      chp345Cell  += this.getCounts(oda.rate_CHP345Issued);

      mCell       += this.getCounts(oda.inspectionItems_MaintenanceRecords);
      dCell       += this.getCounts(oda.inspectionItems_DriverRecords);
      vCell       += this.getCounts(oda.inspectionItems_Vehicles);
      vrCell      += this.getCounts(oda.inspectionItems_VehicleReinsp);
      flctCell    += this.getCounts(oda.inspectionItems_FLCargoTank);
      hwcCell     += this.getCounts(oda.inspectionItems_FLCargoTank);
      ucCell      += this.getCounts(oda.inspectionItems_UnitsCertified);
      cvsaCell    += this.getCounts(oda.inspectionItems_CVSA);
      voosCell    += this.getCounts(oda.inspectionItems_VehicleOOS);

      vamprCell   += this.getCounts(oda.Violations_Admin_MaintenanceProgramRecords);
      vadrCell    += this.getCounts(oda.Violations_Admin_DriverRecords);
      vahosCell   += this.getCounts(oda.Violations_Admin_HoursOfService);
      vahzCell    += this.getCounts(oda.Violations_Admin_HazMaterials);
      vacsatCell  += this.getCounts(oda.Violations_Admin_CSAT);
      
      vvbCell     += this.getCounts(oda.Violations_Vehicle_Brakes);
      vvlsCell    += this.getCounts(oda.Violations_Vehicle_LampsSignals);
      vvcdCell    += this.getCounts(oda.Violations_Vehicle_ConnectingDevices);
      vvssCell    += this.getCounts(oda.Violations_Vehicle_SteeringAndSuspension);    
      vvtwCell    += this.getCounts(oda.Violations_Vehicle_TiresAndWheels);    
      vvemCell    += this.getCounts(oda.Violations_Vehicle_EquipmentMaintenance);    
      vvctCell    += this.getCounts(oda.Violations_Vehicle_ContainerTank); 

      smCell      += this.getCounts(oda.Spec_MCSTO);    
      snCell      += this.getCounts(oda.Spec_NumberOfHighwayInspections);    
      sefCell     += 0;           

    });

    this.row.Cells.push(carrierCell);
    this.row.Cells.push(mpCell);
    this.row.Cells.push(drCell);
    this.row.Cells.push(viCell);
    this.row.Cells.push(ctiCell);
    this.row.Cells.push(hmiCell);

    this.row.Cells.push(isCell);
    this.row.Cells.push(traCell);
    this.row.Cells.push(piCell);
    this.row.Cells.push(poiCell);
    this.row.Cells.push(camCell);
    this.row.Cells.push(aaCell);
    this.row.Cells.push(tCell);
    this.row.Cells.push(oavmCell);
    this.row.Cells.push(oaoCell);
    this.row.Cells.push(oaocCell);

    let total:number = 0;
    this.row.Cells.forEach((x, index) => {
      total+= x;    
    });
    this.row.Cells.push(total);

    this.row.Cells.push(trCell);
    this.row.Cells.push(crCell);
    this.row.Cells.push(udCell);
    this.row.Cells.push(chp345Cell);

    this.row.Cells.push(mCell);
    this.row.Cells.push(dCell);
    this.row.Cells.push(vCell);
    this.row.Cells.push(vrCell);
    this.row.Cells.push(flctCell);
    this.row.Cells.push(hwcCell);
    this.row.Cells.push(ucCell);
    this.row.Cells.push(cvsaCell);
    this.row.Cells.push(voosCell);  

    this.row.Cells.push(vamprCell);
    this.row.Cells.push(vadrCell);
    this.row.Cells.push(vahosCell);
    this.row.Cells.push(vahzCell);
    this.row.Cells.push(vacsatCell);

    this.row.Cells.push(vvbCell);
    this.row.Cells.push(vvlsCell);
    this.row.Cells.push(vvcdCell);
    this.row.Cells.push(vvssCell);      
    this.row.Cells.push(vvtwCell);      
    this.row.Cells.push(vvemCell);      
    this.row.Cells.push(vvctCell);      

    this.row.Cells.push(smCell);      
    this.row.Cells.push(snCell);      
    this.row.Cells.push(sefCell);
  };

  getCounts(value: any) {
    //return !Number.isInteger(value) ? 0 : <number>value;
    return !this.IsInteger(value) ? 0 : <number>value;
  }

  getHours(value: any) {
    //console.log("rodc: ", value);
    if (typeof value == 'undefined') return 0.0;
    let testValue = parseFloat(value.toString());
    //if (Number.isNaN(testValue)) return 0.0; 
    if (this.IsNaN(testValue)) return 0.0; 
    return testValue;
  }

  getTerminalCarrierCounts(value: any) {
    //console.log("rodc: ", value);
    if (typeof value == 'undefined') return 0;
    if (value == 'S' || value == 'U') return 1; 
    return 0;
  }  

  getUpDownRatingCounts(value: any) {
    //console.log("rodc: ", value);
    if (typeof value == 'undefined') return 0;
    if (value == 'D' || value == 'U') return 1; 
    return 0;
  }

  IsNaN(o) {
    return o !== o;
  }

  IsInteger(value: any) {
    return (value ^ 0) === +value;
  }  

}