import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { StudentidService } from './studentid.service';



@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/id-card/`;

  studentids=[];
  idCardDto = {
    "background": "",
    "enableAddress": 0,
    "enableAdmissionNo": 0,
    "enableBloodGroup": 0,
    "enableClass": 0,
    "enableDob": 0,
    "enableFathersName": 0,
    "enableMothersName": 0,
    "enablePhone": 0,
    "enableStudentName": 0,
    "headerColor": "",
    "id": 0,
    "isActive": "yes",
    "logo": "",
    "schoolAddress": "",
    "schoolName": "",
    "signImage": "",
    "status": 0,
    "title": ""
  };

  isUpdate: boolean = false;


  constructor(private datatableservice:DatatableService,
    private studentidservice:StudentidService ) { }

  ngOnInit(): void {
    //this.datatableservice.initTable("certificate");
    this.getList();

  }
  getList() {
    this.studentidservice.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.studentids = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('studentids');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.studentidservice.save(this.idCardDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    this.studentidservice.getById(Id).subscribe((res: any) => {
      this.idCardDto.background= res.data.background;
      this.idCardDto.enableAddress = res.data.enableAddress;
      this.idCardDto.enableAdmissionNo = res.data.enableAdmissionNo;
      this.idCardDto.enableBloodGroup= res.data.enableBloodGroup;
      this.idCardDto.enableClass = res.data.enableClass;
      this.idCardDto.enableDob = res.data.enableDob;
      this.idCardDto.enableFathersName= res.data.enableFathersName;
      this.idCardDto.enableMothersName= res.data.enableMothersName;
      this.idCardDto.enablePhone = res.data.enablePhone;
      this.idCardDto.enableStudentName = res.data.enableStudentName;
      this.idCardDto.headerColor = res.data.headerColor;
      this.idCardDto.id = res.data.id;
      this.idCardDto.isActive = res.data.isActive;
      this.idCardDto.logo= res.data.logo;
      this.idCardDto.schoolAddress= res.data.schoolAddress;
      this.idCardDto.schoolName= res.data.schoolName;
      this.idCardDto.signImage = res.data.signImage;
      this.idCardDto.status= res.data.status;
      this.idCardDto.title= res.data.title;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.idCardDto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {
    this.studentidservice.update(this.idCardDto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.studentidservice.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.idCardDto.schoolName  = "";
    this.idCardDto.schoolAddress="";
    this.idCardDto.title = "";
    this.idCardDto.headerColor="";
    this.idCardDto.id = 0;
    this.idCardDto.isActive = "yes";
    this.isUpdate = false;
  }

  


}
