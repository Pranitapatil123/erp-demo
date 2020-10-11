import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { IssueitemService } from './issueitem.service';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})
export class IssueItemComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/item-issue/`;

  constructor(private datatableservice: DatatableService, private IssueitemService: IssueitemService) { }

  issues = [];
  itemIssueDto = {
    "id": 0,
    "isActive": "yes",
    "isReturned": 0,
    "issueBy": "",
    "issueDate": "",
    "issueTo": "",
    "issueType": "",
    "note": "",
    "quantity": 0,
    "returnDate": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getissueditemList();
  }

  getissueditemList() {
    this.IssueitemService.getissueditemList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.issues = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Issue Item');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addissue() {
    this.IssueitemService.save(this.itemIssueDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getissueditemList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }

  getissueditemById(issueId) {
   
    this.IssueitemService.getissueditemById(issueId).subscribe((res: any) => {

      this.itemIssueDto.issueBy = res.data.issueBy;
      this.itemIssueDto.issueTo = res.data.issueTo;
      this.itemIssueDto.issueType = res.data.issueType;
      this.itemIssueDto.id = res.data.id;
      this.itemIssueDto.isActive = res.data.isActive;
      this.itemIssueDto.note = res.data.note;
      this.itemIssueDto.quantity = res.data.quantity;
      this.itemIssueDto.returnDate = res.data.returnDate;
      this.itemIssueDto.issueDate = res.data.issueDate;
      this.itemIssueDto.isReturned = res.data.isReturned;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.itemIssueDto;
  }
  setUpdateFileds(issueId) {
    this.isUpdate = true;
    this.getissueditemById(issueId);
  }
  updateissue(issueId) {
    this.IssueitemService.updateissue(this.itemIssueDto, issueId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getissueditemList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteissue(issueId) {
    this.IssueitemService.deleteissue(issueId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getissueditemList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {

    this.itemIssueDto.issueBy = "";
    this.itemIssueDto.issueTo = "";
    this.itemIssueDto.issueType = "";
    this.itemIssueDto.id = 0;
    this.itemIssueDto.isActive = "yes";
    this.itemIssueDto.note = "";
    this.itemIssueDto.quantity = 0;
    this.itemIssueDto.returnDate = "";
    this.itemIssueDto.issueDate = "";
    this.itemIssueDto.isReturned = 0;
    this.isUpdate = false;
  }

}
