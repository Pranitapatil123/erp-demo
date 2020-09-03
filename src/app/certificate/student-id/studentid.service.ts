import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentidService {

  constructor(private http: HttpClient) { }
  url = `http://yamistha.cloudjiffy.net/id-card/`;
  
  save(idCardDto): any {
    return this.http.post(this.url, idCardDto);
  }

  getList(): any {
    return this.http.get(this.url);
  }

  delete(Id): any {
    return this.http.delete(this.url + Id);
  }

  update(idCardDto, Id): any {
    return this.http.put(this.url + Id, idCardDto);
  }

  getById(Id): any {
    return this.http.get(this.url + Id);
  }
}
