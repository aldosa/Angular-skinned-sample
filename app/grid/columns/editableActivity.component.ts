import {Component, NgModule, Input, Output, EventEmitter } from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { OnDutyActivity } from '../../domain/onDutyActivity';


@Component({
  //selector: 'my-app',
  templateUrl: './editableActivity.component.html',
  //styleUrls: [ './app.component.css' ]
  styles: [`

      td, th { height: 29px; padding: 0px; }

      input { height:90%; width: 90%; }
      select {height:90%; width: 90%;}
     
  `]
})
export class EditableActivityComponent {
  @Input() record: OnDutyActivity;
  @Output() activityModified: EventEmitter<any> = new EventEmitter();
  @Output() editRequest: EventEmitter<any> = new EventEmitter();

  values = '';

  ngOnInit() {
   this.model = this.record;

 }

  onKey(event: any) { // without type info
    console.log("ea: to be sent onkey ->", this.record);
    this.activityModified.emit(this.record);
  }

  onSubmit() { 
    //this.submitted = true; 
    console.log("ea: to be sent onsubmit ->", this.record);

    for (var property in this.record) {
        if (this.record.hasOwnProperty(property)) {
            if (this.record[property] == null) this.record[property] = 0.0;
        }
    }

    if (this.record['isHoliday'] == null){
       this.record['isHoliday'] = false; 
    }

    this.activityModified.emit(this.record);
    this.editRequest.emit(-1);
  }

  onKeyPress(event: any){
    console.info("ea: key pressed");
  }

programTypes = [{ value: "NONE", text: "" }, 
  { value: "1", text: "1. Program" },
  { value: "B", text: "B. Bus carrier not regulated by an operating authority" },
  { value: "C", text: "C. Mediocre bus" },
  { value: "F", text: "F. Farm Labor Vehicle (FLV)" },
  { value: "G", text: "G. General public paratransit vehicles (GPPV)" },
  { value: "H", text: "H. Hazardous Material Carrier" },
  { value: "J", text: "J. Section J Truck carrier" },
  { value: "K", text: "K. Section K Truck carrier" },
  { value: "L", text: "L. Modified Limousine" },
  { value: "M", text: "M. Hazardous Materials Shipper" },
  { value: "P", text: "P. School Pupil Activity Bus (SPAB)" },
  { value: "S", text: "S. School Bus carrier" },
  { value: "T", text: "T. Tour Bus carrier" },
  { value: "W", text: "W. Hazardous Waste (HW) transporter" },
  { value: "X", text: "X. Non-program" },
  { value: "Y", text: "Y. Youth Bus" }];


  inspectionTypes = [{ value: "NONE", text: "" }, 
{ value: "A", text: "A. Terminal Inspection" },
{ value: "B", text: "B. Inspection for BS" },
{ value: "C", text: "C. Inspection for certification of vehicles" },
{ value: "D", text: "D. Carrier inspection" },
{ value: "I", text: "I. Investigation" }];

  ratingTypes = [{ value: "NONE", text: "" }, 
{ value: "S", text: "S Satisfactory" },
{ value: "U", text: "U Unsatisfactory" }];

  upDownTypes = [{ value: "NONE", text: "" }, 
{ value: "U", text: "U Upgrade" },
{ value: "D", text: "D Downgrade" }];


  model = new OnDutyActivity(-1, 1, -1, false, 'NONE', 'NONE', 'NONE', false);

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}