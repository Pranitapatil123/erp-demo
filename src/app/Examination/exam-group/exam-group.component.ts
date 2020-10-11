import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ExamGroupService } from './exam-group.service';
@Component({
  selector: 'app-exam-group',
  templateUrl: './exam-group.component.html',
  styleUrls: ['./exam-group.component.css']
})
export class ExamGroupComponent implements OnInit {

  
  constructor(private datatableservice: DatatableService, private examgroupService: ExamGroupService) { }

  exams = [];
  examGroupDto = {
    "description": "",
    "examType": "",
    "id": 0,
    "isActive": "",
    "name": ""
  }
  examTypes=[
    {id:1,examType:"General Purpose(Pass/Fail)"},
    {id:2,examType:"School Based Grading System"},
    {id:3,examType:"Collage Based Grading System"},
    {id:4,exmaType:"GPA Grading System"}
  ];

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.examgroupService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.exams = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Exam Group');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.examgroupService.save(this.examGroupDto).subscribe((res: any) => {
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
    this.examgroupService.getById(Id).subscribe((res: any) => {
      this.examGroupDto.description = res.data.description;
      this.examGroupDto.examType=res.data.examType;
      this.examGroupDto.name=res.data.name;
      this.examGroupDto.id = res.data.id;
      this.examGroupDto.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.examGroupDto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {
    this.examgroupService.update(this.examGroupDto, Id).subscribe((res: any) => {
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
    this.examgroupService.delete(Id).subscribe((res: any) => {
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
    this.examGroupDto.examType="";
    this.examGroupDto.name="";
    this.examGroupDto.description = "";
    this.examGroupDto.id = 0;
    this.examGroupDto.isActive = "yes";
    this.isUpdate = false;
  }


}
