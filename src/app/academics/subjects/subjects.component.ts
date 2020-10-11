import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { SubjectService } from './subject.service';



@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/subject`;

  subjects = [];
  subjectDto = {
    'code': '',
    'id': 0,
    'isActive': 'yes',
    'name': '',
    'type': ''
  }

  isUpdate: boolean = false;


  constructor(
    private datatableservice: DatatableService,
    private subjectService: SubjectService,
  ) { }



  ngOnInit(): void {

    this.getSubjectList();

  }



  getSubjectList() {
    this.subjectService.getAllSubjectList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.subjects = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('subject');
    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }


  addSubject() {
    this.subjectService.saveSubject(this.subjectDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Subject Saved Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();

      this.getSubjectList();
    }, (err) => {
      console.log('Error While Saving Subject');
      console.error(err);

    });
  }


  getSubjectById(subjectId) {
    this.subjectService.getSubjectById(subjectId).subscribe((res: any) => {
      this.subjectDto.name = res.data.name;
      this.subjectDto.id = res.data.id;
      this.subjectDto.isActive = res.data.isActive;
      this.subjectDto.code = res.data.code;
      this.subjectDto.type = res.data.type;

      console.log(this.subjectDto);

    }, (err) => {
      console.log('Error while fetching Subject by Id');
      console.error(err);
    });
    return this.subjectDto;
  }
  setUpdateFileds(subjectId) {
    this.isUpdate = true;
    this.getSubjectById(subjectId);
  }
  updateSubject(subjectId) {

    this.subjectService.updateSubject(this.subjectDto, subjectId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert('Subject Updated Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getSubjectList();
      this.clearData();

    }, (err) => {
      console.log('Error while Updating Subject');
      console.error(err);
    });

  }
  
  deleteSubject(subjectId) {
    this.subjectService.deleteSubject(subjectId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Subject deleted Successfully');
      }
      //destroy dataTable
      this.datatableservice.destroy();
      this.getSubjectList();
      this.clearData();

    }, (err) => {
      console.log('Error while deleting Subject');
      console.error(err);
    });

  }
  


clearData() {
  this.subjectDto.name = "";
  this.subjectDto.id = 0;
  this.subjectDto.isActive = "yes";
  this.subjectDto.code = "";
  this.subjectDto.type = "";
  this.isUpdate = false;

}
}