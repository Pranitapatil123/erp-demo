import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { FeediscountService } from './feediscount.service';



@Component({
  selector: 'app-feesdiscount',
  templateUrl: './feesdiscount.component.html',
  //styleUrls: ['./visitorbook.component.scss']
})
export class FeesdiscountComponent implements OnInit {
  url = 'http://yamistha.cloudjiffy.net/fee-discount/';

  constructor(private feesdiscountService: FeediscountService, private datatableservice: DatatableService) { }

  discounts = [];
  feeDiscountDto = {
    "amount": 0,
    "code": "",
    "description": "",
    "id": 0,
    "isActive": "yes",
    "name": "",
    //"sessionId": 0
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getdiscountList();
  }

  getdiscountList() {
    this.feesdiscountService.getdiscountList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.discounts = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Fees discount');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
 
  adddiscount() {
    this.feesdiscountService.save(this.feeDiscountDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getdiscountList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }
   getdiscountById(discountId) {
    this.feesdiscountService.getdiscountById(discountId).subscribe((res: any) => {
      this.feeDiscountDto.description = res.data.description;
      this.feeDiscountDto.id = res.data.id;
      this.feeDiscountDto.isActive = res.data.isActive;
      this.feeDiscountDto.name = res.data.name;
      this.feeDiscountDto.code = res.data.code;
      this.feeDiscountDto.amount = res.data.amount;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.feeDiscountDto;
  }
  setUpdateFileds(discountId) {
    this.isUpdate = true;
    this.getdiscountById(discountId);
  }
  updatediscount(discountId) {
    this.feesdiscountService.updatediscount(this.feeDiscountDto, discountId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getdiscountList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletediscount(discountId) {
    this.feesdiscountService.deletediscount(discountId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getdiscountList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.feeDiscountDto.description = "";
    this.feeDiscountDto.id = 0;
    this.feeDiscountDto.amount = 0;
    this.feeDiscountDto.isActive = "yes";
    this.feeDiscountDto.name = "";
    this.feeDiscountDto.code = "";
    this.isUpdate = false;
  }

}

