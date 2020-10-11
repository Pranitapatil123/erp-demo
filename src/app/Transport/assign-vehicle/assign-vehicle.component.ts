import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/shared/datatableservice/datatable.service';
import { AssignService } from './assign.service';
import { AddrouteService } from 'src/app/Transport/route/addroute.service';
import { VehicleService } from 'src/app/Transport/vehicle/vehicle.service';


@Component({
  selector: 'app-assign-vehicle',
  templateUrl: './assign-vehicle.component.html',
  styleUrls: ['./assign-vehicle.component.css']
})
export class AssignVehicleComponent implements OnInit {


  url = `http://yamistha.cloudjiffy.net/vehicle-route/`;

  assigns = [];
  vehicleRouteDto = {
    "id": 0,
    "isActive": "yes",
    "routeId": 0,
    "vehicleId": 0
  };

  isUpdate: boolean = false;
  vehs: any;
  routes:any;
  // purposes: any;

  constructor(private assignService: AssignService,
    private addrouteService: AddrouteService, private vehicleService: VehicleService,
    private datatableservice: DatatableService,

  ) { }

  ngOnInit(): void {
    this.getrouteList();
    this.getvehList();
    this.getassignList();
  }

  getrouteList() {
    this.addrouteService.getrouteList().subscribe((res: any) => {
      var data = res['data'];
      this.routes = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  getvehList() {
    this.vehicleService.getvehList().subscribe((res: any) => {
      var data = res['data'];
      this.vehs = data['content'];
      // console.log(this.sources);
    }, (err) => {
      console.log('Error while fetching all ');
      console.error(err);
    });
  }
  getassignList() {
    this.assignService.getassignList().subscribe((res: any) => {
      var data = res['data'];
      var content = data['content'];
      this.assigns = content.map((key) => ({ ...key }));
      this.datatableservice.initTable('assign vehicle');
    }, (err) => {
      console.log('Error while fetching data');
      console.error(err);
    });
  }
  addassign() {
    this.assignService.save(this.vehicleRouteDto).subscribe((res: any) => {
      if (res.success == true) {
        alert('Saved Successfully');
      }
      this.datatableservice.destroy();
      this.getassignList();
      this.clearData();
    }, (err) => {
      console.log('Error While Saving');
      console.error(err);
    });
  }
  getassignById(assignId) {
    this.assignService.getassignById(assignId).subscribe((res: any) => {
      this.vehicleRouteDto.routeId = res.data.routeId;
      this.vehicleRouteDto.id = res.data.id;
      this.vehicleRouteDto.isActive = res.data.isActive;
      this.vehicleRouteDto.vehicleId = res.data.vehicleId;
      
      console.log(this.vehicleRouteDto);

    }, (err) => {
      console.log('Error while fetching');
      console.error(err);
    });
    return this.vehicleRouteDto;
  }
  setUpdateFileds(assignId) {
    this.isUpdate = true;
    this.getassignById(assignId);
  }

  updateassign(assignId) {

    this.assignService.updateassign(this.vehicleRouteDto, assignId).subscribe((res: any) => {
      // tslint:disable-next-line: triple-equals
      if (res.success == true) {
        alert(' Updated Successfully');
      }
      this.datatableservice.destroy();
      this.isUpdate = false;
      this.getassignList();
      this.clearData();
    }, (err) => {
      console.log('Error while Updating');
      console.error(err);
    });
  }

  deleteasign(assignId) {
    this.assignService.deleteasign(assignId).subscribe((res: any) => {
      if (res.success == true) {
        alert('Deleted Successfully');
      }
      this.datatableservice.destroy();
      this.getassignList();
      this.clearData();
    }, (err) => {
      console.log('Error while deleting ');
      console.error(err);
    });
  }
  clearData() {
    this.vehicleRouteDto.vehicleId = 0;
    this.vehicleRouteDto.id = 0;
    this.vehicleRouteDto.isActive = "yes";
    this.vehicleRouteDto.routeId = 0;
    
    this.isUpdate = false;
  }
}
