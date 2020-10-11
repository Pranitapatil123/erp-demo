import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SystemRoutingModule } from './system-routing.module';
import { SesstionSettingComponent } from './sesstion-setting/sesstion-setting.component';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { SmsSettingComponent } from './sms-setting/sms-setting.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { FrontcmsSettingComponent } from './frontcms-setting/frontcms-setting.component';
import { RestoreComponent } from './backup/restore/restore.component';
import { LanguagesComponent } from './languages/languages.component';
import { UsersComponent } from './users/users.component';
import { ModulesComponent } from './modules/modules.component';
import { SystemFieldsComponent } from './system-fields/system-fields.component';
import { AssignPermissionComponent } from './assign-permission/assign-permission.component';



@NgModule({
    declarations: [SesstionSettingComponent, RolesPermissionComponent, EmailSettingComponent, CustomFieldsComponent, GeneralSettingComponent, NotificationSettingComponent, SmsSettingComponent, PaymentMethodsComponent, FrontcmsSettingComponent, RestoreComponent, LanguagesComponent, UsersComponent, ModulesComponent, SystemFieldsComponent, AssignPermissionComponent],
    imports: [
        CommonModule,
        SystemRoutingModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class SystemModule {
}
