import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AddHomeworkComponent} from './add-homework/add-homework.component';
import { HomeworkEvaluationComponent } from './homework-evaluation/homework-evaluation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
        {path: 'add-homework', component: AddHomeworkComponent },
    { path: 'homework-evaluation', component: HomeworkEvaluationComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)]
})
export class HomeworkRoutingModule { }
