import { BaseActivity } from '../domain/baseActivity';
import { OnDutyActivity } from '../domain/onDutyActivity';
import { OffDutyActivity } from '../domain/offDutyActivity';

export type OnOff = OnDutyActivity | OffDutyActivity;

export var ACTIVITYDATA: Array<OnOff> = [];

ACTIVITYDATA.push(
  {
    id: 1,
    dayNumber: 1,
    activityNumber: 1,
    isHoliday: false,
    approvalStatus: 'P',
    type_Program: 'X',
    type_Inspection: 'A',
    type_BitProgram: true,
    dutyHours_Inspection_Carrier: 1.0,
    dutyHours_Inspection_ContainerTankInspection: 2.0,
    dutyHours_Inspection_DriverRecords: 3.0,
    dutyHours_Inspection_HazardousMaterialInspection: 4.0,
    //dutyHours_Inspection_MaintenanceProgram: 5.0,
    dutyHours_Inspection_Scheduling: 6.0,
    dutyHours_Inspection_VehicleInspection: 7.0,
    dutyHours_OtherActivities_AdminAction: 8.0,
    dutyHours_OtherActivities_CIIAIIMAIT: 9.0,
    dutyHours_OtherActivities_Other: 10.0,
    dutyHours_OtherActivities_OtherComments: "Other comments",
    dutyHours_OtherActivities_PostInspection: 11.0,
    dutyHours_OtherActivities_PreInspection: 12.0,
    dutyHours_OtherActivities_Training: 13.0
  }
);

ACTIVITYDATA = ACTIVITYDATA.concat(
  [
    {
      id: 2,
      dayNumber: 1,
      activityNumber: 2,
      isHoliday: true,
      holidayHours: 3
    },
    {
      id: 3,
      dayNumber: 1,
      activityNumber: 3,
      isHoliday: false,
      approvalStatus: 'D',
      type_Program: '1',
      type_Inspection: 'B',
      type_BitProgram: true,
      approvalComments: 'Correct the carrier information.',
      dutyHours_Inspection_Carrier: 3.0,
      dutyHours_Inspection_ContainerTankInspection: 2.0,
      dutyHours_Inspection_DriverRecords: 3.0,
      dutyHours_Inspection_HazardousMaterialInspection: 4.0,
      dutyHours_Inspection_MaintenanceProgram: 5.0,
      dutyHours_Inspection_Scheduling: 6.0,
      dutyHours_Inspection_VehicleInspection: 7.0,
      dutyHours_OtherActivities_AdminAction: 8.0,
      dutyHours_OtherActivities_CIIAIIMAIT: 9.0,
      dutyHours_OtherActivities_Other: 10.0,
      dutyHours_OtherActivities_OtherComments: "Other comments",
      dutyHours_OtherActivities_PostInspection: 11.0,
      dutyHours_OtherActivities_PreInspection: 12.0,
      dutyHours_OtherActivities_Training: 13.0,
    }
  ]);
