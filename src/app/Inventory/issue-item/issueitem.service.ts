import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IssueitemService {
  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/item-issue/`;

  save(itemIssueDto): any {
    return this.http.post(this.url, itemIssueDto);
  }

  getissueditemList(): any {
    return this.http.get(this.url);
  }

  deleteissue(issueId): any {
    return this.http.delete(this.url + issueId);
  }

  updateissue(itemIssueDto, issueId): any {
    return this.http.put(this.url + issueId, itemIssueDto);
  }

  getissueditemById(issueId): any {
    return this.http.get(this.url + issueId);
  }
}