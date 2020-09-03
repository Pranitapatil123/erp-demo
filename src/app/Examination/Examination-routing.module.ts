import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExamGroupComponent } from './exam-group/exam-group.component';
import { ExamScheduleComponent } from './exam-schedule/exam-schedule.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { DesignAdmitCardComponent } from './design-admit-card/design-admit-card.component';
import { PrintAdmitCardComponent } from './print-admit-card/print-admit-card.component';
import { DesignMarksheetComponent } from './design-marksheet/design-marksheet.component';
import { PrintMarksheetComponent } from './print-marksheet/print-marksheet.component';
import { MarksGradeComponent } from './marks-grade/marks-grade.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  { path: 'exam-group', component: ExamGroupComponent },
  { path: 'exam-schedule', component: ExamScheduleComponent },
  { path: 'exam-result', component: ExamResultComponent },
  { path: 'design-admit-card', component: DesignAdmitCardComponent },
  { path: 'print-admit-card', component: PrintAdmitCardComponent },
  { path: 'design-marksheet', component: DesignMarksheetComponent },
  { path: 'print-marksheet', component: PrintMarksheetComponent },
  { path: 'marks-grade', component: MarksGradeComponent },
  { path: 'add-exam', component: AddExamComponent },


];



@NgModule({
  declarations: [ExamGroupComponent, ExamScheduleComponent, ExamResultComponent, DesignMarksheetComponent,
    DesignAdmitCardComponent, PrintMarksheetComponent, PrintAdmitCardComponent, MarksGradeComponent, AddExamComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)]
})
export class ExaminationRoutingModule { }
