import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AdditemstockService } from './additemstock.service';

@Component({
  selector: 'app-add-item-stock',
  templateUrl: './add-item-stock.component.html',
  styleUrls: ['./add-item-stock.component.css']
})
export class AddItemStockComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/item-stock/`;

  itemstocks = [];
  itemStockDto = {
    "attachment": "",
    "date": "",
    "description": "",
    "id": 0,
    "isActive": "yes",
    "itemPhoto": "",
    "purchasePrice": "",
    "quantity": 0,
    "symbol": "",
    "name": ""
  };

  isUpdate: boolean = false;
  // purposes: any;

  constructor(private AdditemstockService: AdditemstockService,
    private datatableservice: DatatableService,

  ) { }

  ngOnInit(): void {
    this.getitemstockList();
  }

  
  getitemstockList() {
    this.AdditemstockService.getitemstockList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.itemstocks = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('add item stock');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  additemstock() {
    this.AdditemstockService.save(this.itemStockDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getitemstockList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      //console.error(err);
    });
  }
  getitemstockById(itemId) {
    this.AdditemstockService.getitemstockById(itemId).subscribe((res: any) => {
      this.itemStockDto.date = res.data.date;
      this.itemStockDto.id = res.data.id;
      this.itemStockDto.isActive = res.data.isActive;
      this.itemStockDto.attachment = res.data.attachment;
      this.itemStockDto.description = res.data.description;
      this.itemStockDto.name = res.data.name;
      this.itemStockDto.itemPhoto = res.data.itemPhoto;
      this.itemStockDto.purchasePrice = res.data.purchasePrice;
      this.itemStockDto.quantity = res.data.quantity;
      this.itemStockDto.symbol = res.data.symbol;

      console.log(this.itemStockDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.itemStockDto;
  }
  setUpdateFileds(itemId) {
    this.isUpdate = true;
    this.getitemstockById(itemId);
  }

  updateitemstock(itemId) {

    this.AdditemstockService.updateitemstock(this.itemStockDto, itemId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getitemstockList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });
  }

  deleteitemstock(itemId) {
    this.AdditemstockService.deleteitemstock(itemId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getitemstockList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  clearData() {
    this.itemStockDto.date = "";
    this.itemStockDto.id = 0;
    this.itemStockDto.isActive = "yes";
    this.itemStockDto.attachment = "";
    this.itemStockDto.description = "";
    this.itemStockDto.name = "";
    this.itemStockDto.itemPhoto = "";
    this.itemStockDto.purchasePrice = "";
    this.itemStockDto.quantity = 0;
    this.itemStockDto.symbol = "";
    this.isUpdate = false;
  }
}
