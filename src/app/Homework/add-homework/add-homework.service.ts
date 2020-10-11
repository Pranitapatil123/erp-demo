import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddHomeworkService {

  url = 'http://yamistha.cloudjiffy.net/homework';

  constructor(private http: HttpClient) { }

  save(homeworkDto): any {
    return this.http.post('http://yamistha.cloudjiffy.net/homework', homeworkDto);
  }

  gethostelList(): any {
    return this.http.get('http://yamistha.cloudjiffy.net/homework');
  }

  delete(Id): any {

    console.log(this.url + Id);
    return this.http.delete('http://yamistha.cloudjiffy.net/homework/' + Id);
  }

  update(homeworkDto, Id): any {
    return this.http.put('http://yamistha.cloudjiffy.net/homework/'+Id, homeworkDto);
  }

  getById(Id): any {
    return this.http.get('http://yamistha.cloudjiffy.net/homework/' + Id);
  }
}
