import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { DesignmarksheetService } from './designmarksheet.service';

@Component({
  selector: 'app-design-marksheet',
  templateUrl: './design-marksheet.component.html',
  styleUrls: ['./design-marksheet.component.css']
})
export class DesignMarksheetComponent implements OnInit {

  url = 'http://yamistha.cloudjiffy.net/template-marksheet/';

  constructor(private datatableservice: DatatableService, private designmarksheetService: DesignmarksheetService,) { }

  marks = [];
  templateMarksheetDto = {
    "backgroundImg": "",
    "examCenter": "",
    "examName": "",
    "heading": "",
    "schoolName": "",
    "date": "",
    "id": 0,
    "isActive": "yes",
    "isAddress": 0,
    "isAdmissionNo": 0,
    "isDob": 0,
    "isFatherName": 0,
    "isGender": 0,
    "isMotherName": 0,
    "isName": 0,
    "isPhoto": 0,
    "isRollNo": 0,
    "leftLogo": "",
    "rightLogo": "",
    "sign": "",
    "template": "",
    "title": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getdesignmarksheetList();
  }

  getdesignmarksheetList() {
    this.designmarksheetService.getdesignmarksheetList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.marks = content.map((key) => ({ ...key }));
      this.datatableservice.initTable(' income head');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addmarksheet() {
    this.designmarksheetService.save(this.templateMarksheetDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getdesignmarksheetList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }

  getmarkById(cardId) {
    this.designmarksheetService.getmarkById(cardId).subscribe((res: any) => {
      this.templateMarksheetDto.title = res.data.title;
      this.templateMarksheetDto.id = res.data.id;
      this.templateMarksheetDto.isActive = res.data.isActive;
      this.templateMarksheetDto.template = res.data.template;
      this.templateMarksheetDto.sign = res.data.sign;
      this.templateMarksheetDto.schoolName = res.data.schoolName;
      this.templateMarksheetDto.rightLogo = res.data.rightLogo;
      this.templateMarksheetDto.leftLogo = res.data.leftLogo;
      this.templateMarksheetDto.isRollNo = res.data.isRollNo;
      this.templateMarksheetDto.isPhoto = res.data.isPhoto;
      this.templateMarksheetDto.isName = res.data.isName;
      this.templateMarksheetDto.isMotherName = res.data.isMotherName;
      this.templateMarksheetDto.isGender = res.data.isGender;
      this.templateMarksheetDto.isFatherName = res.data.isFatherName;
      this.templateMarksheetDto.isDob = res.data.isDob;
      this.templateMarksheetDto.isAdmissionNo = res.data.isAdmissionNo;
      this.templateMarksheetDto.isAddress = res.data.isAddress;
      this.templateMarksheetDto.heading = res.data.heading;
      this.templateMarksheetDto.examName = res.data.examName;
      this.templateMarksheetDto.examCenter = res.data.examCenter;
      this.templateMarksheetDto.backgroundImg = res.data.backgroundImg;
      this.templateMarksheetDto.schoolName = res.data.schoolName;
      this.templateMarksheetDto.date = res.data.date;


    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.templateMarksheetDto;
  }
  setUpdateFileds(cardId) {
    this.isUpdate = true;
    this.getmarkById(cardId);
  }
  updatemarksheet(cardId) {
    this.designmarksheetService.updatemarksheet(this.templateMarksheetDto, cardId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getdesignmarksheetList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletemark(cardId) {
    this.designmarksheetService.deletemark(cardId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getdesignmarksheetList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.templateMarksheetDto.title = "";
    this.templateMarksheetDto.id = 0;
    this.templateMarksheetDto.isActive = "yes";
    this.templateMarksheetDto.template = "";
    this.templateMarksheetDto.sign = "";
    this.templateMarksheetDto.schoolName = "";
    this.templateMarksheetDto.rightLogo = "";
    this.templateMarksheetDto.leftLogo = "";
    this.templateMarksheetDto.isRollNo = 0;
    this.templateMarksheetDto.isPhoto = 0;
    this.templateMarksheetDto.isName = 0;
    this.templateMarksheetDto.isMotherName = 0;
    this.templateMarksheetDto.isGender = 0;
    this.templateMarksheetDto.isFatherName = 0;
    this.templateMarksheetDto.isDob = 0;
    this.templateMarksheetDto.isAdmissionNo = 0;
    this.templateMarksheetDto.isAddress = 0;
    this.templateMarksheetDto.heading = "";
    this.templateMarksheetDto.examName = "";
    this.templateMarksheetDto.examCenter = "";
    this.templateMarksheetDto.backgroundImg = "";
    this.templateMarksheetDto.schoolName = "";
    this.templateMarksheetDto.date = "";
    this.isUpdate = false;
  }
}
