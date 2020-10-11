import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ItemstoreService } from './itemstore.service';

@Component({
  selector: 'app-item-store',
  templateUrl: './item-store.component.html',
  styleUrls: ['./item-store.component.css']
})
export class ItemStoreComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/item-Store/`;

  constructor(private datatableservice: DatatableService, private ItemstoreService: ItemstoreService) { }

  stores = [];
  itemStoreDto = {
    "itemStore": "",
    "id": 0,
    "isActive": "yes",
    "description": "",
    "code": "",

  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getstoreList();
  }
  
  getstoreList() {
    this.ItemstoreService.getstoreList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.stores = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Item Store');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addstore() {
    this.ItemstoreService.save(this.itemStoreDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getstoreList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getstoreById(storeId) {
    this.ItemstoreService.getstoreById(storeId).subscribe((res: any) => {
      this.itemStoreDto.itemStore= res.data.itemCategory;
      this.itemStoreDto.description = res.data.description;
      this.itemStoreDto.code = res.data.code;
      this.itemStoreDto.id = res.data.id;
      this.itemStoreDto.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.itemStoreDto;
  }
  setUpdateFileds(storeId) {
    this.isUpdate = true;
    this.getstoreById(storeId);
  }
  updatestore(storeId) {
    this.ItemstoreService.updatestore(this.itemStoreDto, storeId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getstoreList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletestore(storeId) {
    this.ItemstoreService.deletestore(storeId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getstoreList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.itemStoreDto.itemStore = "";
    this.itemStoreDto.description = "";
    this.itemStoreDto.code = "";
    this.itemStoreDto.id = 0;
    this.itemStoreDto.isActive = "yes";
    this.isUpdate = false;
  }

}