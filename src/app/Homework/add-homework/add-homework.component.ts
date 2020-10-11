import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ClassService } from 'src/app/academics/class/class.service';
import { SectionsService } from 'src/app/academics/sections/sections.service';
import { SubjectService } from 'src/app/academics/subjects/subject.service';
import { AddhomeworkService } from './addhomework.service';


@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.component.html',
  styleUrls: ['./add-homework.component.css']
})
export class AddHomeworkComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/homework/`;


  homework = [];
  homeworkDto = {

    "classId": 0,
    "createDate": "",
    "description": "",
    "document": "",
    "evaluationDate": "",
    "homeworkDate": "",
    "id": 0,
    "isActive": "yes",
    "sectionId": 0,
    "subjectId": 0,
    "submitDate": ""

  };

  isUpdate: boolean = false;
  
  sections: any;
  classes: any;
  subjects: any;

  constructor(private addhomeworkService: AddhomeworkService,
    private datatableservice: DatatableService,
    private sectionsService: SectionsService,
    private classservice: ClassService,
    private subjectService: SubjectService,

  ) { }

  ngOnInit(): void {
    this.getAllSectionList();
    this.getAllSubjectList();
    this.getClassList();
    this.gethomeworkList();
  }
 

  getAllSubjectList() {
    this.subjectService.getAllSubjectList().subscribe((res: any)=>{
      var data=res['data'];
      this.subjects=data['content'];
     },(err)=>{
      console.log('Error while fetching Class list');
      console.log(err);
     });
  }

  getClassList() {
   this.classservice.getClassList().subscribe((res: any)=>{
    var data=res['data'];
    this.classes=data['content'];
   },(err)=>{
    console.log('Error while fetching Class list');
    console.log(err);
   });
  }
  getAllSectionList() {
    this.sectionsService.getAllSectionList().subscribe((res: any) => {
      var data = res['data'];
      this.sections = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all sections');
      console.error(err);
    });
  }

  gethomeworkList() {
    this.addhomeworkService.gethomeworkList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.homework = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Add Homework');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addhw() {
    this.addhomeworkService.save(this.homeworkDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.gethomeworkList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

    gethwById(hwId) {
      this.addhomeworkService.gethwById(hwId).subscribe((res: any) => {
        //console.log(res);
        this.homeworkDto.createDate = res.data.createDate;
        this.homeworkDto.description = res.data.description;
        this.homeworkDto.id = res.data.id;
        this.homeworkDto.isActive = res.data.isActive;
        this.homeworkDto.classId = res.data.classId;
        this.homeworkDto.sectionId = res.data.sectionId;
        this.homeworkDto.document = res.data.document;
        this.homeworkDto.evaluationDate = res.data.evaluationDate;
        this.homeworkDto.homeworkDate = res.data.homeworkDate;
        this.homeworkDto.subjectId = res.data.subjectId;
        this.homeworkDto.submitDate = res.data.submitDate;




        console.log(this.homeworkDto);

      }, (err) => {
        console.log('Error while fetching');
        console.error(err);
      });
      return this.homeworkDto;
    }
    setUpdateFileds(hwId) {
      console.log(hwId);
      this.isUpdate = true;
      this.gethwById(hwId);
      console.log('setup successfull');
    }
    updatehw(hwId) {

      this.addhomeworkService.updatehw(this.homeworkDto, hwId).subscribe((res: any) => {
        // tslint:disable-next-line: triple-equals
        if (res.success == true) {
          alert(' Updated Successfully');
        }
        this.datatableservice.destroy();
        this.isUpdate = false;
        this.gethomeworkList();
        this.clearData();
      }, (err) => {
        console.log('Error while Updating');
        console.error(err);
      });

    }

    deletehw(hwId) {
      this.addhomeworkService.deletehw(hwId).subscribe((res: any) => {
        if (res.success == true) {
          alert('Deleted Successfully');
        }
        this.datatableservice.destroy();
        this.gethomeworkList();
        this.clearData();
      }, (err) => {
        console.log('Error while deleting ');
        console.error(err);
      });
    }

    clearData() {
      this.homeworkDto.createDate = "";
      this.homeworkDto.description = "";
      this.homeworkDto.id = 0;
      this.homeworkDto.isActive = "yes";
      this.homeworkDto.classId = 0;
      this.homeworkDto.sectionId = 0;
      this.homeworkDto.document = "";
      this.homeworkDto.evaluationDate = "";
      this.homeworkDto.homeworkDate = "";
      this.homeworkDto.subjectId = 0;
      this.homeworkDto.submitDate = "";
      this.isUpdate = false;

    }
  }
