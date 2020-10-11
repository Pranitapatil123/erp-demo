import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AddExamService } from './add-exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  constructor(private datatableservice: DatatableService, private addexamxamService: AddExamService) { }

  Exams = [];
  
  examDto = {
    "dateFrom": "",
  "dateTo": "",
  "description": "",
  "examGroupId": 0,
  "examGroupName": "",
  "id": 0,
  "isPublish": "",
  "name": "",
  "sessionId": 0,
  "sessionName": "",
  "status": "",
  "subjectCount": 0
  }
  

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.datatableservice.initTable("Examination");
    this.getList();
  }
   getList() {
    this.addexamxamService.getList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.Exams = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Examination');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.addexamxamService.save(this.examDto).subscribe((res: any) => {
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
    this.addexamxamService.getById(Id).subscribe((res: any) => {
      this.examDto.dateFrom = res.data.dateFrom;
      this.examDto.dateTo=res.data.dateTo;
      this.examDto.description=res.data.description;
      this.examDto.examGroupId = res.data.examGroupId;
      this.examDto.examGroupName = res.data.examGroupName;
      this.examDto.id = res.data.id;
      this.examDto.isPublish=res.data.isPublish;
      this.examDto.name=res.data.name;
      this.examDto.sessionId = res.data.sessionId;
      this.examDto.sessionName = res.data.sessionName;
      this.examDto.status = res.data.status;
      this.examDto.subjectCount = res.data.subjectCount;
      
      
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.examDto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {
    this.addexamxamService.update(this.examDto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
     // this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.addexamxamService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      //this.getList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.examDto.dateFrom="";
    this.examDto.dateTo="";
    this.examDto.description = "";
    this.examDto.description = "";
    this.examDto.examGroupId = 0;
    this.examDto.examGroupName="";
    this.examDto.isPublish="";
    this.examDto.name = "";
    this.examDto.sessionId = 0;
    this.examDto.sessionName = "";
    this.examDto.status="";
    this.examDto.subjectCount=0;
    
    this.isUpdate = false;
  }


}
