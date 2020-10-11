import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsuppliersService {
  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/item-supplier/`;

  save(itemSupplierDto): any {
    return this.http.post(this.url, itemSupplierDto);
  }

  getsupplierList(): any {
    return this.http.get(this.url);
  }

  deletesupplier(supplierId): any {
    return this.http.delete(this.url + supplierId);
  }

  updatesupplier(itemSupplierDto, supplierId): any {
    return this.http.put(this.url + supplierId, itemSupplierDto);
  }

  getsupplierById(supplierId): any {
    return this.http.get(this.url + supplierId);
  }
}