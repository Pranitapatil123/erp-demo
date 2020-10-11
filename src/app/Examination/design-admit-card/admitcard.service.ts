import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmitcardService {
  constructor(private http: HttpClient) { }

  url = 'http://yamistha.cloudjiffy.net/template-admit-card/';


  save(templateAdmitcardDto): any {
    return this.http.post(this.url, templateAdmitcardDto);
  }

  getdesignmarkList(): any {
    return this.http.get(this.url);
  }

  deleteadmitcard(cardId): any {
    return this.http.delete(this.url + cardId);
  }

  updateadmitcard(templateAdmitcardDto, cardId): any {
    return this.http.put(this.url + cardId, templateAdmitcardDto);
  }

  getcardById(cardId): any {
    return this.http.get(this.url + cardId);
  }
}
