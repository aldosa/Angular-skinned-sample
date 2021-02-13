import { OnDutyActivity } from './onDutyActivity';
import { OffDutyActivity } from './offDutyActivity';

export type GenericActivity = OnDutyActivity | OffDutyActivity; 

export class BaseActivity {
  constructor(
    public id: number,
    public dayNumber: number,
    public activityNumber: number,
    public isHoliday: boolean,
    public approvalStatus: string,
    public approvalComments?: string
  ) {  }

}