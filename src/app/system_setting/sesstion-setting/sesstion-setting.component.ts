import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { SessionsettingService } from './sessionsetting.service';
@Component({
  selector: 'app-sesstion-setting',
  templateUrl: './sesstion-setting.component.html',
  styleUrls: ['./sesstion-setting.component.css']
})
export class SesstionSettingComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/session/`;


  constructor(private datatableservice: DatatableService, private sessionsettingService: SessionsettingService) { }

  sessions = [];
  sessionDto = {
    "session": "",
    "id": 0,
    "isActive": "yes"
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getsessionList();
  }
  getsessionList() {
    this.sessionsettingService.getsessionList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.sessions = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('session setting');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addsession() {
    this.sessionsettingService.save(this.sessionDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getsessionList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getsessionById(sessionId) {
    this.sessionsettingService.getsessionById(sessionId).subscribe((res: any) => {
      this.sessionDto.session = res.data.session;
      this.sessionDto.id = res.data.id;
      this.sessionDto.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.sessionDto;
  }
  setUpdateFileds(sessionId) {
    this.isUpdate = true;
    this.getsessionById(sessionId);
  }
  updatesession(sessionId) {
    this.sessionsettingService.updatesession(this.sessionDto, sessionId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getsessionList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletesession(sessionId) {
    this.sessionsettingService.deletesession(sessionId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getsessionList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.sessionDto.session = "";
    this.sessionDto.id = 0;
    this.sessionDto.isActive = "yes";
    this.isUpdate = false;
  }

}
