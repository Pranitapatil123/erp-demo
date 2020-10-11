import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AdditemService } from './additem.service';
import { ItemsuppliersService } from 'src/app/Inventory/item-supplier/itemsuppliers.service';
import { ItemstoreService } from 'src/app/Inventory/item-store/itemstore.service';
import { ItemcategoryService } from 'src/app/Inventory/item-category/itemcategory.service';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  url = `http://yamistha.cloudjiffy.net/item/`;

  items = [];
  itemDto = {
    "date": "",
    "description": "",
    "id": 0,
    "isActive": "yes",
    "itemCategoryId": 0,
    "itemPhoto": "",
    "itemStoreId": 0,
    "itemSupplierId": 0,
    "name": "",
    "quantity": 0,
    "unit": ""
  };

  isUpdate: boolean = false;
  categories: any;
  stores: any;
  suppliers: any;
  // purposes: any;

  constructor(private additemService: AdditemService,
              private itemsuppliersService: ItemsuppliersService,
              private itemstoreService: ItemstoreService,
              private itemcategoryService: ItemcategoryService,
              private datatableservice: DatatableService,

  ) { }

  ngOnInit(): void {
    this.getstoreList();
    this.getsupplierList();
    this.getitemList();
    this.getcategoryList();

  }

  getstoreList() {
    this.itemstoreService.getstoreList().subscribe((res: any) => {
      var data = res['data'];
      this.stores = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  getsupplierList() {
    this.itemsuppliersService.getsupplierList().subscribe((res: any) => {
      var data = res['data'];
      this.suppliers = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  getcategoryList() {
    this.itemcategoryService.getcategoryList().subscribe((res: any) => {
      var data = res['data'];
      this.categories = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  getitemList() {
    this.additemService.getitemList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.items = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Add Item');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  additem() {
    this.additemService.save(this.itemDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getitemList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }
  getitemById(itemId) {
    this.additemService.getitemById(itemId).subscribe((res: any) => {
      this.itemDto.date = res.data.date;
      this.itemDto.id = res.data.id;
      this.itemDto.isActive = res.data.isActive;
      this.itemDto.name = res.data.name;
      this.itemDto.description = res.data.description;
      this.itemDto.itemCategoryId = res.data.itemCategoryId;
      this.itemDto.itemPhoto = res.data.itemPhoto;
      this.itemDto.itemStoreId = res.data.itemStoreId;
      this.itemDto.itemSupplierId = res.data.itemSupplierId;
      this.itemDto.quantity = res.data.quantity;
      this.itemDto.unit = res.data.unit;

      console.log(this.itemDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
      return this.itemDto;
  }
  setUpdateFileds(itemId) {
    this.isUpdate = true;
    this.getitemById(itemId);
  }

  updateitem(itemId) {

    this.additemService.updateitem(this.itemDto, itemId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getitemList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });
  }

  deleteitem(itemId) {
    this.additemService.deleteitem(itemId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getitemList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  clearData() {
    this.itemDto.date = "";
    this.itemDto.id = 0;
    this.itemDto.isActive = "yes";
    this.itemDto.name = "";
    this.itemDto.description = "";
    this.itemDto.itemCategoryId = 0;
    this.itemDto.itemPhoto = "";
    this.itemDto.itemStoreId = 0;
    this.itemDto.itemSupplierId = 0;
    this.itemDto.quantity = 0;
    this.itemDto.unit = "";
    this.isUpdate = false;
  }
}
