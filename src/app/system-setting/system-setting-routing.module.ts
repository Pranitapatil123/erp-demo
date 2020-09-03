import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SystemSettingRoutingModule } from './system-setting-routing.module';
import { GeneralsettingComponent } from './generalsetting/generalsetting.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';


const routes: Routes = [
  { path: 'generalsetting', component:GeneralsettingComponent },
  { path: 'roles-permissions', component: RolesPermissionsComponent  },
  
];

@NgModule({
  declarations: [
    GeneralsettingComponent,RolesPermissionsComponent , ],
 


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSettingRoutingModule { }
