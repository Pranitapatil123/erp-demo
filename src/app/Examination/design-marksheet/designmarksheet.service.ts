import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignmarksheetService {
  constructor(private http: HttpClient) { }
  url = 'http://yamistha.cloudjiffy.net/template-marksheet/';


  save(templateAdmitcardDto): any {
    return this.http.post(this.url, templateAdmitcardDto);
  }

  getdesignmarksheetList(): any {
    return this.http.get(this.url);
  }

  deletemark(cardId): any {
    return this.http.delete(this.url + cardId);
  }

  updatemarksheet(templateAdmitcardDto, cardId): any {
    return this.http.put(this.url + cardId, templateAdmitcardDto);
  }

  getmarkById(cardId): any {
    return this.http.get(this.url + cardId);
  }
}
