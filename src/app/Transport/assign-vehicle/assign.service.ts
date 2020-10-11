import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignService {
  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/vehicle-route/`;

  save(vehicleRouteDto): any {
    return this.http.post(this.url, vehicleRouteDto);
  }

  getassignList(): any {
    return this.http.get(this.url);
  }

  deleteasign(assignId): any {
    return this.http.delete(this.url + assignId);
  }

  updateassign(vehicleRouteDto, assignId): any {
    return this.http.put(this.url + assignId, vehicleRouteDto);
  }

  getassignById(assignId): any {
    return this.http.get(this.url + assignId);
  }
}