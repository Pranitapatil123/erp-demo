import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ItemsuppliersService } from './itemsuppliers.service';

@Component({
  selector: 'app-item-supplier',
  templateUrl: './item-supplier.component.html',
  styleUrls: ['./item-supplier.component.css']
})
export class ItemSupplierComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/item-supplier/`;


  constructor(private datatableservice: DatatableService, private ItemsuppliersService: ItemsuppliersService) { }

  suppliers = [];
  itemSupplierDto = {
    "address": "",
  "contactPersonEmail": "",
  "contactPersonName": "",
  "contactPersonPhone": "",
  "description": "",
  "email": "",
  "id": 0,
  "isActive": "",
  "itemSupplier": "",
  "phone": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getsupplierList();
  }

  getsupplierList() {
    this.ItemsuppliersService.getsupplierList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.suppliers = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Item Store');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addsupplier() {
    this.ItemsuppliersService.save(this.itemSupplierDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getsupplierList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getsupplierById(storeId) {
    this.ItemsuppliersService.getsupplierById(storeId).subscribe((res: any) => {
      
      this.itemSupplierDto.address = res.data.address;
      this.itemSupplierDto.description = res.data.description;
      this.itemSupplierDto.contactPersonEmail = res.data.contactPersonEmail;
      this.itemSupplierDto.id = res.data.id;
      this.itemSupplierDto.isActive = res.data.isActive;
      this.itemSupplierDto.contactPersonName = res.data.contactPersonName;
      this.itemSupplierDto.contactPersonPhone = res.data.contactPersonPhone;
      this.itemSupplierDto.email = res.data.email;
      this.itemSupplierDto.itemSupplier = res.data.itemSupplier;

      this.itemSupplierDto.phone = res.data.phone;

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.itemSupplierDto;
  }
  setUpdateFileds(storeId) {
    this.isUpdate = true;
    this.getsupplierById(storeId);
  }
  updatesupplier(storeId) {
    this.ItemsuppliersService.updatesupplier(this.itemSupplierDto, storeId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getsupplierList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletesupplier(storeId) {
    this.ItemsuppliersService.deletesupplier(storeId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getsupplierList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.itemSupplierDto.address = "";
    this.itemSupplierDto.description = "";
    this.itemSupplierDto.contactPersonEmail = "";
    this.itemSupplierDto.id = 0;
    this.itemSupplierDto.isActive = "yes";
    this.itemSupplierDto.contactPersonName = "";
    this.itemSupplierDto.contactPersonPhone = "";
    this.itemSupplierDto.email = "";
    this.itemSupplierDto.itemSupplier = "";
    this.isUpdate = false;
  }

}