import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root",
})
export class FeesGroupService {
    constructor(private http: HttpClient) { }

   url = `http://yamistha.cloudjiffy.net/fee-group/`;
   


    save(Dto): any {
        return this.http.post(this.url, Dto);
    }

    getgroupList(): any {
        return this.http.get(this.url);
    }

    delete(Id): any {
        return this.http.delete(this.url + Id);
    }

    update(Dto, Id): any {
        return this.http.put(this.url + Id, Dto);
    }

    getById(Id): any {
        return this.http.get(this.url + Id);
    }
}
