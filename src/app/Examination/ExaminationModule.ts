import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ExaminationRoutingModule } from './Examination-routing.module';
import { ExamGroupComponent } from './exam-group/exam-group.component';
import { ExamScheduleComponent } from './exam-schedule/exam-schedule.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { DesignAdmitCardComponent } from './design-admit-card/design-admit-card.component';
import { PrintAdmitCardComponent } from './print-admit-card/print-admit-card.component';
import { DesignMarksheetComponent } from './design-marksheet/design-marksheet.component';
import { PrintMarksheetComponent } from './print-marksheet/print-marksheet.component';
import { MarksGradeComponent } from './marks-grade/marks-grade.component';
import { AddExamComponent } from './add-exam/add-exam.component';



@NgModule({
  declarations: [ExamGroupComponent,ExamScheduleComponent,ExamResultComponent,DesignMarksheetComponent,
    DesignAdmitCardComponent,PrintMarksheetComponent,PrintAdmitCardComponent,MarksGradeComponent],
  imports: [
    CommonModule,
    ExaminationRoutingModule,
    FormsModule,
    ReactiveFormsModule,]
})
export class ExaminationModule { }
