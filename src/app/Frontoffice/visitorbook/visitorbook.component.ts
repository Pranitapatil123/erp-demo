import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { VisitorbookService } from './visitorbook.service';
import { SourceService } from 'src/app/Frontoffice/setup/source/source.service';
import { VisitorsPerposeService } from 'src/app/Frontoffice/setup/visitors-purpose/visitors-perpose.service';

@Component({
  selector: 'app-visitorbook',
  templateUrl: './visitorbook.component.html',
  styleUrls: ['./visitorbook.component.css']
})
export class VisitorbookComponent implements OnInit {
  
  url = `http://yamistha.cloudjiffy.net/visitors-book/`;

  visitorsbook = [];
  visitorsBook = {
    'contact': '',
    'date': '',
    'email': '',
    'id': 0,
    'idProof': '',
    'image': '',
    'inTime': '',
    'isActive': 'yes',
    'name': '',
    'noOfPepple': 0,
    'note': '',
    'outTime': '',
    'purpose': '',
    'source': ''
  };
  isUpdate: boolean = false;
  visitors: any;
  sources: any;
 // purposes: any;

  constructor(private visitorbookService: VisitorbookService,
    private datatableservice: DatatableService,
    private sourceservice: SourceService,
    private visitorsperposeService: VisitorsPerposeService) { }

  ngOnInit(): void {
    this.getvisitorList();
    this.getAllSourceList();
    this.getpurposeList();


  }
  getAllSourceList() {
    this.sourceservice.getAllSourceList().subscribe((res: any) => {
      var data = res['data'];
      this.sources = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  getpurposeList() {
    this.visitorsperposeService.getpurposeList().subscribe((res: any) => {
      var data = res['data'];
      this.visitors = data['content'];
      //this.visitors = content.map((key) => ({ ...key }));
      //console.log(this.visitors);
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  getvisitorList() {
    this.visitorbookService.getvisitorList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.visitorsbook = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Visitors Book');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.visitorbookService.save(this.visitorsBook).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getvisitorList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getByVbId(VbId) {
    this.visitorbookService.getByVbId(VbId).subscribe((res: any) => {
      this.visitorsBook.contact = res.data.contact;
      this.visitorsBook.date = res.data.date;
      this.visitorsBook.id = res.data.VbId;
      this.visitorsBook.isActive = res.data.isActive;
      this.visitorsBook.idProof = res.data.VbIdProof;
      this.visitorsBook.image = res.data.image;
      this.visitorsBook.inTime = res.data.inTime;
      this.visitorsBook.email = res.data.email;
      this.visitorsBook.name = res.data.name;
      this.visitorsBook.noOfPepple = res.data.noOfPepple;
      this.visitorsBook.note = res.data.note;
      this.visitorsBook.outTime = res.data.outTime;
      this.visitorsBook.source = res.data.source;
      this.visitorsBook.purpose = res.data.purpose;

      console.log(this.visitorsBook);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.visitorsBook;
  }
  setUpdateFileds(VbId) {
    this.isUpdate = true;
    this.getByVbId(VbId);
  }
  updatevb(VbId) {

    this.visitorbookService.updatevb(this.visitorsBook, VbId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getvisitorList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletevb(VbId) {
    this.visitorbookService.deletevb(VbId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getvisitorList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.visitorsBook.contact = "";
    this.visitorsBook.date = "";
    this.visitorsBook.id = 0;
    this.visitorsBook.isActive = "yes";
    this.visitorsBook.idProof = "";
    this.visitorsBook.image = "";
    this.visitorsBook.inTime = "";
    this.visitorsBook.email = "";
    this.visitorsBook.name = "";
    this.visitorsBook.noOfPepple = 0;
    this.visitorsBook.note = "";
    this.visitorsBook.outTime = "";
    this.visitorsBook.source = "";
    this.visitorsBook.purpose = "";
    this.isUpdate = false;
  }
}




