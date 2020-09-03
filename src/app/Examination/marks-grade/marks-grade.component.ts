import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { MarksGradeService } from './marks-grade.service';


@Component({
  selector: 'app-marks-grade',
  templateUrl: './marks-grade.component.html',
  styleUrls: ['./marks-grade.component.css']
})
export class MarksGradeComponent implements OnInit {

  url=`http://yamistha.cloudjiffy.net/grade/`;

  grades=[];
  gradeDto={
    "description": "",
    "examType": "",
    "id": 0,
    "isActive": "yes",
    "markFrom": 0,
    "markUpto": 0,
    "name": "",
    "point": 0
  };
  isUpdate: boolean = false;

  constructor(private datatableservice:DatatableService,
    private marksgradeservice:MarksGradeService ) { }

  ngOnInit(): void {
    //this.datatableservice.initTable("Examination");
    this.getmarksgradeList();
  }
  getmarksgradeList() {
    this.marksgradeservice.getmarksgradeList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.grades = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('studentids');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addmarksgrade() {
    this.marksgradeservice.save(this.gradeDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getmarksgradeList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getBymarksgradeId(Id) {
    this.marksgradeservice.getBymarksgradeId(Id).subscribe((res: any) => {
      this.gradeDto.description= res.data.description;
      this.gradeDto.examType = res.data.examType;
      this.gradeDto.id = res.data.id;
      this.gradeDto.isActive = res.data.isActive;
      this.gradeDto.markFrom = res.data.markFrom;
      this.gradeDto.markUpto = res.data.markUpto;
      this.gradeDto.name = res.data.name;
      this.gradeDto.point = res.data.point;
     
      
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.gradeDto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this. getBymarksgradeId(Id);
  }
  update(Id) {
    this.marksgradeservice.update(this.gradeDto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getmarksgradeList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.marksgradeservice.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getmarksgradeList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.gradeDto.description = "";
    this.gradeDto.examType="";
    this.gradeDto.id = 0;
    this.gradeDto.isActive = "yes";
    this.gradeDto.markFrom= 0;
    this.gradeDto.markUpto=0;
    this.gradeDto.name="";
    this.gradeDto.point=0;
   
    this.isUpdate = false;
  }

}
