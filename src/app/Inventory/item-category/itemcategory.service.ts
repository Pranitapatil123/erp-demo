import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemcategoryService {
  constructor(private http: HttpClient) { }
  url = `http://yamistha.cloudjiffy.net/item-category/`;

  save(itemCategoryDto): any {
    return this.http.post(this.url, itemCategoryDto);
  }

  getcategoryList(): any {
    return this.http.get(this.url);
  }

  deletecategory(categoryId): any {
    return this.http.delete(this.url + categoryId);
  }

  updatecategory(itemCategoryDto, categoryId): any {
    return this.http.put(this.url + categoryId, itemCategoryDto);
  }

  getitemCategoryById(categoryId): any {
    return this.http.get(this.url + categoryId);
  }
}