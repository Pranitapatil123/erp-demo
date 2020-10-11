import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { SubjectgroupService } from './subjectgroup.service';
import { SectionsService } from 'src/app/academics/sections/sections.service';
import { SubjectService } from 'src/app/academics/subjects/subject.service';
import { ClassService } from 'src/app/academics/class/class.service';



@Component({
  selector: 'app-subject-group',
  templateUrl: './subject-group.component.html',
  styleUrls: ['./subject-group.component.css']
})
export class SubjectGroupComponent implements OnInit {
  constructor(private datatableservice: DatatableService, private subjectgroupService: SubjectgroupService,
    private subjectService: SubjectService, private classService: ClassService,
    private sectionsService: SectionsService,
) { }

  sgs = [];
  subjectGroupDto = {
   
  "classId": 0,
      "description": "",
        "id": 0,
          "name": "",
          'isActive': 'yes',

          "sections": [
              {
                "id": 0,
                "name": "",
                "subjectGroupClassSectionId": 0
              }
            ],
              "subjects": [
                {
                  "id": 0,
                  "name": "",
                  "subjectGroupSubjectId": 0
                }
              ]
}
  sectionDto: any = [];
  classes:any[];
  subjectDto:any[];
  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getsgList();
    this.getSectionList();
    this.getClassList();
    this.getSubjectList();
  }
  getSectionList() {
    this.sectionsService.getAllSectionList().subscribe((res: any) => {
      var data = res.data;
      this.sectionDto = data.content;
      console.log(this.sectionDto);
    }, (err) => {
      console.log('Error while fetching all sections');
      console.error(err);
    });
  }
  getClassList() {
    this.classService.getClassList().subscribe((res: any) => {
      var data = res.data;
      this.classes = data.content;
      console.log(this.sectionDto);
    }, (err) => {
      console.log('Error while fetching all Classes');
      console.error(err);
    });
  }
  getSubjectList() {
    this.subjectService.getAllSubjectList().subscribe((res: any) => {
      var data = res.data;
      this.subjectDto = data.content;
      console.log(this.sectionDto);
    }, (err) => {
      console.log('Error while fetching all subject');
      console.error(err);
    });
  }

  getsgList() {
    this.subjectgroupService.getsgList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.sgs = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Subject Group');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addsg() {
    this.subjectgroupService.save(this.subjectGroupDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getsgList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }

  getsgById(subjectgroupId) {
    this.subjectgroupService.getsgById(subjectgroupId).subscribe((res: any) => {
      this.subjectGroupDto.name = res.data.name;
      this.subjectGroupDto.id = res.data.id;
      this.subjectGroupDto.isActive = res.data.isActive;
      this.subjectGroupDto.description = res.data.description;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.subjectGroupDto;
  }
  setUpdateFileds(subjectgroupId) {
    this.isUpdate = true;
    this.getsgById(subjectgroupId);
  }
  updatesg(subjectgroupId) {
    this.subjectgroupService.updatesg(this.subjectGroupDto, subjectgroupId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getsgList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletesg(subjectgroupId) {
    this.subjectgroupService.deletesg(subjectgroupId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getsgList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.subjectGroupDto.name = "";
    this.subjectGroupDto.description = "";
    this.subjectGroupDto.id = 0;
    this.subjectGroupDto.isActive = "yes";
    this.isUpdate = false;
  }

}

