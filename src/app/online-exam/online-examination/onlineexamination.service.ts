import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OnlineexaminationService {
  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/online-exam/';


  save(onlineexamDto): any {
    return this.http.post(this.url, onlineexamDto);
  }

  getonlineList(): any {
    return this.http.get(this.url);
  }

  deleteonline(onlineId): any {
    return this.http.delete(this.url + onlineId);
  }

  updateonline(onlineexamDto, onlineId): any {
    return this.http.put(this.url + onlineId, onlineexamDto);
  }

  getonlineById(onlineId): any {
    return this.http.get(this.url + onlineId);
  }
}
