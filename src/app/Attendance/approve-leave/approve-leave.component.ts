import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ApproveLeaveService } from './approve-leave.service';
@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.css']
})
export class ApproveLeaveComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/student apply leave/`;


  studentApplyleaves = [];
  studentApplyleaveDto = 
    {
      "applyDate": "",
      "approveBy": 0,
      "docs": "",
      "fromDate": "",
      "id": 0,
      "isActive": "yes",
      "reason": "",
      "requestType": 0,
      "status": 0,
      "studentSessionId": 0,
      "toDate": ""
    }
  

  isUpdate: boolean = false;
  constructor(private apprveleaveService: ApproveLeaveService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.geleavetList();
  }

  geleavetList() {
    this.apprveleaveService.geleavetList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.studentApplyleaves = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Student Leaves');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.apprveleaveService.save(this.studentApplyleaveDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.geleavetList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }

  getById(Id) {
    this.apprveleaveService.getById(Id).subscribe((res: any) => {
      this.studentApplyleaveDto.applyDate = res.data.applyDate;
      this.studentApplyleaveDto.approveBy = res.data.approveBy;
      this.studentApplyleaveDto.docs = res.data.docs;
      this.studentApplyleaveDto.fromDate = res.data.fromDate;
      this.studentApplyleaveDto.id = res.data.id;
      this.studentApplyleaveDto.isActive = res.data.isActive;
      this.studentApplyleaveDto.reason= res.data.reason;
      this.studentApplyleaveDto.requestType= res.data.requestType;
      this.studentApplyleaveDto.status= res.data.status;  
      this.studentApplyleaveDto.studentSessionId= res.data.studentSessionId;
      this.studentApplyleaveDto.toDate= res.data.toDate;
      // console.log(this.Dto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.studentApplyleaveDto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {

    this.apprveleaveService.update(this.studentApplyleaveDto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.geleavetList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.apprveleaveService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.geleavetList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }


  clearData() {
      this.studentApplyleaveDto.applyDate = "",
      this.studentApplyleaveDto.approveBy = 0,
      this.studentApplyleaveDto.docs = "",
      this.studentApplyleaveDto.fromDate = "",
      this.studentApplyleaveDto.id = 0,
      this.studentApplyleaveDto.isActive = "yes",
      this.studentApplyleaveDto.reason= "",
      this.studentApplyleaveDto.requestType= 0,
      this.studentApplyleaveDto.status= 0,
      this.studentApplyleaveDto.studentSessionId= 0,
      this.studentApplyleaveDto.toDate= "",
      
      this.isUpdate = false;
  }

}
