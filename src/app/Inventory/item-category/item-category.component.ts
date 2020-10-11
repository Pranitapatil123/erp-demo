import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { ItemcategoryService } from './itemcategory.service';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/item-category/`;

  constructor(private datatableservice: DatatableService, private itemcategoryService: ItemcategoryService) { }

  categories = [];
  itemCategoryDto = {
    "itemCategory": "",
    "id": 0,
    "isActive": "yes",
    "description": "",
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getcategoryList();
  }
  getcategoryList() {
    this.itemcategoryService.getcategoryList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.categories = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('item category');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  additemcategory() {
    this.itemcategoryService.save(this.itemCategoryDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getcategoryList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getitemCategoryById(categoryId) {
    this.itemcategoryService.getitemCategoryById(categoryId).subscribe((res: any) => {
      this.itemCategoryDto.itemCategory = res.data.itemCategory;
      this.itemCategoryDto.description = res.data.description;

      this.itemCategoryDto.id = res.data.id;
      this.itemCategoryDto.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.itemCategoryDto;
  }
  setUpdateFileds(categoryId) {
    this.isUpdate = true;
    this.getitemCategoryById(categoryId);
  }
  updatecategory(categoryId) {
    this.itemcategoryService.updatecategory(this.itemCategoryDto, categoryId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getcategoryList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deletecategory(categoryId) {
    this.itemcategoryService.deletecategory(categoryId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getcategoryList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.itemCategoryDto.itemCategory = "";
    this.itemCategoryDto.description = "";
    this.itemCategoryDto.id = 0;
    this.itemCategoryDto.isActive = "yes";
    this.isUpdate = false;
  }

}