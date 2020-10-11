import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CollectfeesComponent } from './collectfees/collectfees.component';
import { CaryforwordComponent } from './caryforword/caryforword.component';
import { FeesdiscountComponent } from './feesdiscount/feesdiscount.component';
import { FeespaymentComponent} from './feespayment/feespayment.component';
import { FeesmasterComponent } from './feesmaster/feesmaster.component';
import { FeesgroupComponent } from './feesgroup/feesgroup.component';
import { DuefeesComponent } from './duefees/duefees.component';
import { FeestypeComponent } from './feestype/feestype.component';
import { ReminderComponent } from './reminder/reminder.component';
import { FeesGroupAssignComponent } from './fees-group-assign/fees-group-assign.component';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const routes: Routes = [

  { path: 'collectfees', component: CollectfeesComponent},
  {path :'feespayment', component: FeespaymentComponent},
  { path: 'caryforword', component: CaryforwordComponent},
  { path: 'feesdiscount', component: FeesdiscountComponent},
   {path :'feesmaster', component: FeesmasterComponent},
  {path :'feesgroup', component: FeesgroupComponent},
  {path :'duefees', component: DuefeesComponent},
  {path :'feestype', component: FeestypeComponent},
  {path :'reminder', component: ReminderComponent},
  {path :'fees-group-assign', component: FeesGroupAssignComponent},


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //FormsModule,
    //ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FeeCollectionRoutingModule {}
