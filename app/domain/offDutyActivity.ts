import { BaseActivity } from './baseActivity';


export class OffDutyActivity extends BaseActivity {

    constructor(
        public id: number,
        public dayNumber: number,
        public activityNumber: number,
        public isHoliday: boolean,
        public holidayHours: number,
        public approvalStatus: string,
        public approvalComments?: string
     ) {
        super(
            id,
            dayNumber,
            activityNumber,
            isHoliday,
            approvalStatus,

       );
    }
  
  }