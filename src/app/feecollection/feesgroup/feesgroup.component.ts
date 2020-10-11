import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { FeesGroupService } from './feesgroup.service';


@Component({
  selector: 'app-feesgroup',
  templateUrl: './feesgroup.component.html',
  styleUrls: ['./feesgroup.component.css']
})
export class FeesgroupComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/fee-group/`;
  


  constructor(private feesgoupService: FeesGroupService, private datatableservice: DatatableService) { }

  feesgroup = [];
  Dto = {
    "description": "",
    "id": 0,
    "isActive": "yes",
    "isSystem": 0,
    "name": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getgroupList();
  }

  getgroupList() {
    this.feesgoupService.getgroupList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.feesgroup = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Fees Group');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.feesgoupService.save(this.Dto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getgroupList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    this.feesgoupService.getById(Id).subscribe((res: any) => {
      this.Dto.description = res.data.description;
      this.Dto.id = res.data.id;
      this.Dto.isActive = res.data.isActive;
      this.Dto.name = res.data.name;
      this.Dto.isSystem = res.data.isSystem;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.Dto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {
    this.feesgoupService.update(this.Dto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getgroupList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  delete(Id) {
    this.feesgoupService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getgroupList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.Dto.description = "";
    this.Dto.id = 0;
    this.Dto.isActive = "yes";
    this.Dto.name = "";
    this.Dto.isSystem = 0;
    this.isUpdate = false;
  }

}





