import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemstoreService {
  constructor(private http: HttpClient) { }
  url = `http://yamistha.cloudjiffy.net/item-Store/`;

  save(itemStoreDto): any {
    return this.http.post(this.url, itemStoreDto);
  }

  getstoreList(): any {
    return this.http.get(this.url);
  }

  deletestore(storeId): any {
    return this.http.delete(this.url + storeId);
  }

  updatestore(itemStoreDto, storeId): any {
    return this.http.put(this.url + storeId, itemStoreDto);
  }

  getstoreById(storeId): any {
    return this.http.get(this.url + storeId);
  }
}