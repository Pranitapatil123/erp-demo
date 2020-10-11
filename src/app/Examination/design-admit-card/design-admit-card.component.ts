import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AdmitcardService } from './admitcard.service';

@Component({
  selector: 'app-design-admit-card',
  templateUrl: './design-admit-card.component.html',
  styleUrls: ['./design-admit-card.component.css']
})
export class DesignAdmitCardComponent implements OnInit {

  url = 'http://yamistha.cloudjiffy.net/template-admit-card/';

  constructor(private datatableservice: DatatableService, private admitcardService: AdmitcardService,) { }

  cards = [];
  templateAdmitcardDto = {
    "backgroundImg": "",
    "examCenter": "",
    "examName": "",
    "heading": "",
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
    "schoolName": "",
    "sign": "",
    "template": "",
    "title": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getdesignmarkList();
  }

  getdesignmarkList() {
    this.admitcardService.getdesignmarkList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.cards = content.map((key) => ({ ...key }));
      this.datatableservice.initTable(' income head');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addadmitcard() {
    this.admitcardService.save(this.templateAdmitcardDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getdesignmarkList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }

  getcardById(cardId) {
      this.admitcardService.getcardById(cardId).subscribe((res: any) => {
        this.templateAdmitcardDto.title = res.data.title;
        this.templateAdmitcardDto.id = res.data.id;
        this.templateAdmitcardDto.isActive = res.data.isActive;
        this.templateAdmitcardDto.template = res.data.template;
        this.templateAdmitcardDto.sign = res.data.sign;
        this.templateAdmitcardDto.schoolName = res.data.schoolName;
        this.templateAdmitcardDto.rightLogo = res.data.rightLogo;
        this.templateAdmitcardDto.leftLogo = res.data.leftLogo;
        this.templateAdmitcardDto.isRollNo = res.data.isRollNo;
        this.templateAdmitcardDto.isPhoto = res.data.isPhoto;
        this.templateAdmitcardDto.isName = res.data.isName;
        this.templateAdmitcardDto.isMotherName = res.data.isMotherName;
        this.templateAdmitcardDto.isGender = res.data.isGender;
        this.templateAdmitcardDto.isFatherName = res.data.isFatherName;
        this.templateAdmitcardDto.isDob = res.data.isDob;
        this.templateAdmitcardDto.isAdmissionNo = res.data.isAdmissionNo;
        this.templateAdmitcardDto.isAddress = res.data.isAddress;
        this.templateAdmitcardDto.heading = res.data.heading;
        this.templateAdmitcardDto.examName = res.data.examName;
        this.templateAdmitcardDto.examCenter = res.data.examCenter;
        this.templateAdmitcardDto.backgroundImg = res.data.backgroundImg;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.templateAdmitcardDto;
  }
  setUpdateFileds(cardId) {
    this.isUpdate = true;
    this.getcardById(cardId);
  }
  updateadmitcard(cardId) {
    this.admitcardService.updateadmitcard(this.templateAdmitcardDto, cardId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getdesignmarkList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteadmitcard(cardId) {
    this.admitcardService.deleteadmitcard(cardId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getdesignmarkList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.templateAdmitcardDto.title = "";
    this.templateAdmitcardDto.id = 0;
    this.templateAdmitcardDto.isActive = "yes";
    this.templateAdmitcardDto.template = "";
    this.templateAdmitcardDto.sign = "";
    this.templateAdmitcardDto.schoolName = "";
    this.templateAdmitcardDto.rightLogo = "";
    this.templateAdmitcardDto.leftLogo = "";
    this.templateAdmitcardDto.isRollNo = 0;
    this.templateAdmitcardDto.isPhoto = 0;
    this.templateAdmitcardDto.isName = 0;
    this.templateAdmitcardDto.isMotherName = 0;
    this.templateAdmitcardDto.isGender = 0;
    this.templateAdmitcardDto.isFatherName = 0;
    this.templateAdmitcardDto.isDob = 0;
    this.templateAdmitcardDto.isAdmissionNo = 0;
    this.templateAdmitcardDto.isAddress = 0;
    this.templateAdmitcardDto.heading = "";
    this.templateAdmitcardDto.examName = "";
    this.templateAdmitcardDto.examCenter = "";
    this.templateAdmitcardDto.backgroundImg = "";
    this.isUpdate = false;
  }

  /* tooltip = 'Hello!';

  private _basic = false;
  get basic() {
    return this._basic;
  }
  set basic(value: boolean) {
    this._basic = value;
    //this.cdr.detectChanges();
    if (this._basic) {
      setTimeout(() => {
        console.log(document.querySelector(".modal"));
      });
    }
  }

  onToggleFocus() {
    console.log('Toggle has focus');
  }

  onToggleLoseFocus() {
    console.log('Toggle has lost focus');
  } */
}
