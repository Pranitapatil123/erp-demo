import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeworkRoutingModule } from './homework-routing.module';
import { AddHomeworkComponent } from './add-homework/add-homework.component';
import { HomeworkEvaluationComponent } from './homework-evaluation/homework-evaluation.component';
@NgModule({
    declarations: [AddHomeworkComponent,HomeworkEvaluationComponent],
    imports: [
        CommonModule,
        HomeworkRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class HomeworkModule {
}
