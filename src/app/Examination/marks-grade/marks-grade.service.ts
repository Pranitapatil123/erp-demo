import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MarksGradeService {

  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/grade/`;
  
  save(gradeDto): any {
    return this.http.post(this.url, gradeDto);
  }

  getmarksgradeList(): any {
    return this.http.get(this.url);
  }

  delete(Id): any {
    return this.http.delete(this.url + Id);
  }

  update(gradeDto, Id): any {
    return this.http.put(this.url + Id, gradeDto);
  }

  getBymarksgradeId(Id): any {
    return this.http.get(this.url + Id);
  }

}
