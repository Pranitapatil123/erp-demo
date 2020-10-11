import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeCollectionRoutingModule } from "./feecollection-routing.module";
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollectfeesComponent } from './collectfees/collectfees.component';
import { CaryforwordComponent } from './caryforword/caryforword.component';
import { FeesdiscountComponent } from './feesdiscount/feesdiscount.component';
import { FeespaymentComponent } from './feespayment/feespayment.component';
import { FeesmasterComponent } from './feesmaster/feesmaster.component';
import { FeesgroupComponent } from './feesgroup/feesgroup.component';
import { DuefeesComponent } from './duefees/duefees.component';
import { FeestypeComponent } from './feestype/feestype.component';
import { ReminderComponent } from './reminder/reminder.component';
import { FeesGroupAssignComponent } from './fees-group-assign/fees-group-assign.component';
//import { FeesMasterComponent } from './fees-master/fees-master.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";





@NgModule({
  declarations: [CollectfeesComponent, FeespaymentComponent, CaryforwordComponent, FeesdiscountComponent, FeesmasterComponent,
    FeesgroupComponent, DuefeesComponent, FeestypeComponent, ReminderComponent, FeesGroupAssignComponent, ],
  imports: [
    CommonModule,
    FeeCollectionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   
     
  ]
})
export class FeeCollectionModule { }
