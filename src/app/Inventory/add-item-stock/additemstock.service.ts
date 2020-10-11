import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdditemstockService {

  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/item-stock/`;


  save(itemStockDto): any {
    return this.http.post(this.url, itemStockDto);
  }

  getitemstockList(): any {
    return this.http.get(this.url);
  }

  deleteitemstock(itemId): any {
    return this.http.delete(this.url + itemId);
  }

  updateitemstock(itemStockDto, itemId): any {
    return this.http.put(this.url + itemId, itemStockDto);
  }

  getitemstockById(itemId): any {
    return this.http.get(this.url + itemId);
  }
}
