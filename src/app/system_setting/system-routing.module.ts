import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SesstionSettingComponent } from './sesstion-setting/sesstion-setting.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { SmsSettingComponent } from './sms-setting/sms-setting.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { RolesPermissionComponent } from './roles-permission/roles-permission.component';
import { UsersComponent } from './users/users.component';
import { ModulesComponent } from './modules/modules.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { SystemFieldsComponent } from './system-fields/system-fields.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignPermissionComponent } from './assign-permission/assign-permission.component';


const routes: Routes = [
    { path: 'sesstion-setting', component: SesstionSettingComponent },
    { path: 'notification-setting', component: NotificationSettingComponent },
    { path: 'sms-setting', component: SmsSettingComponent },
    { path: 'email-setting', component: EmailSettingComponent },
    { path: 'payment-methods', component: PaymentMethodsComponent },
    { path: 'roles-permission', component: RolesPermissionComponent },
    

    { path: 'users', component:UsersComponent  },
    { path: 'modules', component: ModulesComponent },
    { path: 'custom-fields', component: CustomFieldsComponent },
    { path: 'system-fields', component: SystemFieldsComponent },
    { path: 'assign-permission', component: AssignPermissionComponent  },
   
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)]

})
export class SystemRoutingModule { }
