import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { FeesmasterService } from './feesmaster.service';
import { FeestypeService } from 'src/app/feecollection/feestype/feestype.service'; 
import { FeesGroupService } from 'src/app/feecollection/feesgroup/feesgroup.service';
import { SessionsettingService } from 'src/app/system_setting/sesstion-setting/sessionsetting.service';

@Component({
  selector: 'app-feesmaster',
  templateUrl: './feesmaster.component.html',
  styleUrls: ['./feesmaster.component.scss'],
})
export class FeesmasterComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/feemaster/`;

  feemasters = [];
  requestDto = {
    "amount": 0,
    "dueDate": "",
    "feeGroupId": "",
    "feetypeId": "",
    "fineAmount": 0,
    "finePercentage": 0,
    "fineType": "",
    "id": 0,
    "isActive": "yes",
    "sessionId": 0
  };
  isUpdate: boolean = false;
  feesgroup: any;
  feetypes: any;
  sessions: any;

  
  constructor(private datatableservice: DatatableService,
    private feemasterService: FeesmasterService,
                  private sessionsettingService: SessionsettingService,

              private feetypeservice: FeestypeService,
              private feegroupService: FeesGroupService) { }

  ngOnInit(): void {
    this.getgroupList();
    this.gettypeList();
    this.getmasterList();
    this.getsessionList();


  }
  getgroupList() {
    this.feegroupService.getgroupList().subscribe((res: any) => {
      var data = res['data'];
      this.feesgroup = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  gettypeList() {
    this.feetypeservice.gettypeList().subscribe((res: any) => {
      var data = res['data'];
      this.feetypes = data['content'];
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  getsessionList() {
    this.sessionsettingService.getsessionList().subscribe((res: any) => {
      var data = res['data'];
      this.sessions = data['content'];
      //this.visitors = content.map((key) => ({ ...key }));
      //console.log(this.visitors);
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  getmasterList() {
    this.feemasterService.getmasterList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.feemasters = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Fees Master');
    }, (err) => {
      console.log('Error while fetching data');
      //console.error(err);
    });
  }

  addmaster() {
    this.feemasterService.addmaster(this.requestDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getmasterList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }
  getmasterById(masterId) {
    this.feemasterService.getmasterById(masterId).subscribe((res: any) => {
      this.requestDto.amount = res.data.amount;
      this.requestDto.dueDate = res.data.dueDate;
      this.requestDto.id = res.data.masterId;
      this.requestDto.isActive = res.data.isActive;
      this.requestDto.feeGroupId = res.data.feeGroup;
      this.requestDto.feetypeId = res.data.feetype;
      this.requestDto.fineAmount = res.data.fineAmount;
      this.requestDto.finePercentage = res.data.finePercentage;
      this.requestDto.fineType = res.data.fineType;
      this.requestDto.sessionId = res.data.sessionId;
      console.log(this.requestDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.requestDto;
  }
  setUpdateFileds(masterId) {
    this.isUpdate = true;
    this.getmasterById(masterId);
  }
  updatemaster(masterId) {

    this.feemasterService.updatemaster(this.requestDto, masterId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getmasterList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletemaster(masterId) {
    this.feemasterService.deletemaster(masterId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getmasterList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.requestDto.amount = 0;
    this.requestDto.dueDate = "";
    this.requestDto.id = 0;
    this.requestDto.isActive = "yes";
    this.requestDto.feeGroupId = "";
    this.requestDto.feetypeId = "";
    this.requestDto.fineAmount = 0;
    this.requestDto.finePercentage = 0;
    this.requestDto.fineType = "";
    this.requestDto.sessionId = 0;
    this.isUpdate = false;
  }
}




