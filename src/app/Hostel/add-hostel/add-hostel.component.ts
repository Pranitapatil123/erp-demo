import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AddhostelService } from './addhostel.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-add-hostel',
  templateUrl: './add-hostel.component.html',
  styleUrls: ['./add-hostel.component.css']
})
export class AddHostelComponent implements OnInit {


  hostels = [];
  hostelDto = {
    "address": "",
    "description": "",
    "hostelName": "",
    "id": 0,
    "intake": 0,
    "isActive": "yes",
    "type": ""
  }

  isUpdate: boolean = false;
  constructor(private addhostelService: AddhostelService, private datatableservice: DatatableService) { }

  ngOnInit(): void {
    this.gethostelList();
  }

  gethostelList() {
    this.addhostelService.gethostelList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.hostels = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('hostels');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  add() {
    this.addhostelService.save(this.hostelDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.gethostelList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getById(Id) {
    this.addhostelService.getById(Id).subscribe((res: any) => {
      this.hostelDto.hostelName = res.data.hostelName;
      this.hostelDto.description = res.data.description;
      this.hostelDto.address = res.data.address;
      this.hostelDto.intake = res.data.intake;
      this.hostelDto.id = res.data.id;
      this.hostelDto.isActive = res.data.isActive;
      // console.log(this.Dto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.hostelDto;
  }
  setUpdateFileds(Id) {
    this.isUpdate = true;
    this.getById(Id);
  }
  update(Id) {

    this.addhostelService.update(this.hostelDto, Id).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.gethostelList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }



  delete(Id) {
    this.addhostelService.delete(Id).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.gethostelList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }


  clearData() {
    this.hostelDto.hostelName = "",
      this.hostelDto.type = "",
      this.hostelDto.intake = 0,
      this.hostelDto.address = "",
      this.hostelDto.description = "",
      this.isUpdate = false;
  }

}