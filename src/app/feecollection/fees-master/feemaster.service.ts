import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FeemasterService {
  url = `http://yamistha.cloudjiffy.net/feemaster/`;

  constructor(private http: HttpClient) { }

  addmaster(requestDto): any {
    return this.http.post(this.url, requestDto);
  }

  getmasterList(): any {
    return this.http.get(this.url);
  }

  deletemaster(masterId): any {
    return this.http.delete(this.url + masterId);
  }

  updatemaster(requestDto, masterId): any {
    return this.http.put(this.url + masterId, requestDto);
  }

  getmasterById(masterId): any {
    return this.http.get(this.url + masterId);
  }
}
