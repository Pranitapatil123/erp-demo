import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { SystemSettingRoutingModule } from './system-setting-routing.module';
import { GeneralsettingComponent } from './generalsetting/generalsetting.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { SessionsettingComponent } from './sessionsetting/sessionsetting.component';


@NgModule({
  declarations: [GeneralsettingComponent, RolesPermissionsComponent, SessionsettingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SystemSettingRoutingModule
  ]
})
export class SystemSettingModule { }
