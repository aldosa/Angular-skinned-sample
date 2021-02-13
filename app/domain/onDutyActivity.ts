import { BaseActivity } from './baseActivity';

export class OnDutyActivity extends BaseActivity {

    constructor(
      public id: number,
      public dayNumber: number,
      public activityNumber: number,
      public isHoliday: boolean,
      public approvalStatus: string,

      public type_Program: string,
      public type_Inspection: string,
      public type_BitProgram: boolean,

      public approvalComments?: string,
      
      public dutyHours_Inspection_Carrier?: number,
      public dutyHours_Inspection_MaintenanceProgram?: number,
      public dutyHours_Inspection_DriverRecords?: number,
      public dutyHours_Inspection_VehicleInspection?: number,
      public dutyHours_Inspection_ContainerTankInspection?: number,
      public dutyHours_Inspection_HazardousMaterialInspection?: number,
      public dutyHours_Inspection_Scheduling?: number,
      public dutyHours_Inspection_Travel?: number,
      public dutyHours_OtherActivities_PreInspection?: number,
      public dutyHours_OtherActivities_PostInspection?: number,
      public dutyHours_OtherActivities_CIIAIIMAIT?: number,
      public dutyHours_OtherActivities_AdminAction?: number,
      public dutyHours_OtherActivities_Training?: number,
      public dutyHours_OtherActivities_CHPVehicleMaintenance?: number,
      public dutyHours_OtherActivities_Other?: number,
      public dutyHours_OtherActivities_OtherComments?: string,
      public dutyHours_Totals?: number,

      public rate_TerminalRating?: string,
      public rate_CarrierRating?: string,
      public rate_UpDownGrade?: string,
      public rate_CHP345Issued?: number,

       public inspectionItems_MaintenanceRecords?: number,
       public inspectionItems_DriverRecords?: number,
       public inspectionItems_Vehicles?: number,
       public inspectionItems_VehicleReinsp?: number,
       public inspectionItems_FLCargoTank?: number,
       public inspectionItems_HWContainer?: number,
       public inspectionItems_UnitsCertified?: number,
       public inspectionItems_CVSA?: number,
       public inspectionItems_VehicleOOS?: number,
       public Violations_Admin_MaintenanceProgramRecords?: number,
       public Violations_Admin_DriverRecords?: number,
       public Violations_Admin_HoursOfService?: number,
       public Violations_Admin_HazMaterials?: number,
       public Violations_Admin_CSAT?: number,                     
       public Violations_Vehicle_Brakes?: number,
       public Violations_Vehicle_LampsSignals?: number,
       public Violations_Vehicle_ConnectingDevices?: number,
       public Violations_Vehicle_SteeringAndSuspension?: number,
       public Violations_Vehicle_TiresAndWheels?: number,
       public Violations_Vehicle_EquipmentMaintenance?: number,
       public Violations_Vehicle_ContainerTank?: number,

       public Spec_MCSTO?: number,
       public Spec_NumberOfHighwayInspections?: number,
       public Spec_EmptyField?: string

    ) {
        super(
            id,
            dayNumber,
            activityNumber,
            isHoliday,
            approvalStatus
       );

      }
  
  }