import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AddrouteService } from './addroute.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  url = `http://yamistha.cloudjiffy.net/transport-route/`;

  constructor(private datatableservice: DatatableService, private addrouteService: AddrouteService) { }

  routes = [];
  transportRouteDto = {
    "fare": 0,
    "id": 0,
    "isActive": "yes",
    "noOfVehicle": "",
    "note": "",
    "routeTitle": ""
  }

  isUpdate: boolean = false;

  ngOnInit(): void {
    this.getrouteList();
  }
  getrouteList() {
    this.addrouteService.getrouteList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.routes = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('Route');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }

  addroute() {
    this.addrouteService.save(this.transportRouteDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getrouteList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }

  getrouteByrouteId(routeId) {
    this.addrouteService.getrouteByrouteId(routeId).subscribe((res: any) => {
      this.transportRouteDto.fare = res.data.fare;
      this.transportRouteDto.noOfVehicle = res.data.noOfVehicle;
      this.transportRouteDto.note = res.data.note;
      this.transportRouteDto.routeTitle = res.data.routeTitle;
      this.transportRouteDto.id = res.data.id;
      this.transportRouteDto.isActive = res.data.isActive;
    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.transportRouteDto;
  }
  setUpdateFileds(routeId) {
    this.isUpdate = true;
    this.getrouteByrouteId(routeId);
  }
  updateroute(routeId) {
    this.addrouteService.updateroute(this.transportRouteDto, routeId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getrouteList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });

  }

  deleteroute(routeId) {
    this.addrouteService.deleteroute(routeId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getrouteList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }

  clearData() {
    this.transportRouteDto.fare = 0;
    this.transportRouteDto.noOfVehicle = "";
    this.transportRouteDto.note = "";
    this.transportRouteDto.routeTitle = "";
    this.transportRouteDto.id = 0;
    this.transportRouteDto.isActive = "yes";
    this.isUpdate = false;
  }

}
