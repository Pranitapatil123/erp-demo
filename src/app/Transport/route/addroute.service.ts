import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddrouteService {

  constructor(private http: HttpClient) { }

  url = `http://yamistha.cloudjiffy.net/transport-route/`;
  
  save(transportRouteDto): any {
    return this.http.post(this.url, transportRouteDto);
  }

  getrouteList(): any {
    return this.http.get(this.url);
  }

  deleteroute(routeId): any {
    return this.http.delete(this.url + routeId);
  }

  updateroute(transportRouteDto, routeId): any {
    return this.http.put(this.url + routeId, transportRouteDto);
  }

  getrouteByrouteId(routeId): any {
    return this.http.get(this.url + routeId);
  }
}