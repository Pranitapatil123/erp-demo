import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddhomeworkService {
  url = `http://yamistha.cloudjiffy.net/homework/`;

  constructor(private http: HttpClient) { }

  save(homeworkDto): any {
    return this.http.post(this.url, homeworkDto);
  }

  gethomeworkList(): any {
    return this.http.get(this.url);
  }

  deletehw(hwId): any {
    return this.http.delete(this.url + hwId);
  }

  updatehw(homeworkDto, hwId): any {
    return this.http.put(this.url + hwId, homeworkDto);
  }

  gethwById(hwId): any {
    return this.http.get(this.url + hwId);
  }
}