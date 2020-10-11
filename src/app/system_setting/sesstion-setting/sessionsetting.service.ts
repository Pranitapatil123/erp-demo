
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionsettingService {

  constructor(private http: HttpClient) { }
  url = `http://yamistha.cloudjiffy.net/session/`;

  save(Dto): any {
    return this.http.post(this.url, Dto);
  }

  getsessionList(): any {
    return this.http.get(this.url);
  }

  deletesession(sessionId): any {
    return this.http.delete(this.url + sessionId);
  }

  updatesession(sessionDto, sessionId): any {
    return this.http.put(this.url + sessionId, sessionDto);
  }

  getsessionById(sessionId): any {
    return this.http.get(this.url + sessionId);
  }
}