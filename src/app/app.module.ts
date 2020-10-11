import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./dashboard/home/home.component";
import { ParentinfoComponent } from "./dashboard/parentinfo/parentinfo.component";
import { TeacherinfoComponent } from "./dashboard/teacherinfo/teacherinfo.component";
import { ParentsdetailsComponent } from "./parents_Info/parentsdetails/parentsdetails.component";
import { AddHomeworkComponent } from "./Homework/add-homework/add-homework.component";
import { SearchHomeworkComponent } from "./Homework/search-homework/search-homework.component";
import { RouteComponent } from "./Transport/route/route.component";
import { VehicleComponent } from "./Transport/vehicle/vehicle.component";
import { AssignVehicleComponent } from "./Transport/assign-vehicle/assign-vehicle.component";
import { EventComponent } from "./Frontcms/event/event.component";
import { GallaryComponent } from "./Frontcms/gallary/gallary.component";
import { NewsComponent } from "./Frontcms/news/news.component";
import { MediaManagerComponent } from "./Frontcms/media-manager/media-manager.component";
import { PagesComponent } from "./Frontcms/pages/pages.component";
import { MenusComponent } from "./Frontcms/menus/menus.component";
import { BannerImagesComponent } from "./Frontcms/banner-images/banner-images.component";
import { AdmitFormComponent } from "./admit-form/admit-form.component";
import { CertificateModule } from "./certificate/certificate.module";
import { ReportsModule } from "./Reports/ReportsModule";
import { AcademicsModule } from "./academics/academics.module";
import { DatatableService } from "./shared/datatableservice/datatable.service";
import { AddExpensesComponent } from "./expenses/add-expenses/add-expenses.component";
import { SearchExpensesComponent } from "./expenses/search-expenses/search-expenses.component";
import { ExpensesHeadComponent } from "./expenses/expenses-head/expenses-head.component";
import { AddParentsComponent } from "./parents_Info/add-parents/add-parents.component";
import { AddMoreStudComponent } from "./parents_Info/add-more/add-more.component";
import { CreateComponent } from "./create/create.component";
import { AddGalleryComponent } from "./add-gallery/add-gallery.component";
import { AddNewsComponent } from "./add-news/add-news.component";
import { AddPageComponent } from "./add-page/add-page.component";
import { StudentAttendanceComponent } from "./Attendance/student-attendance/student-attendance.component";
import { AttendanceByDateComponent } from "./Attendance/attendance-by-date/attendance-by-date.component";
import { ApproveLeaveComponent } from "./Attendance/approve-leave/approve-leave.component";
//import { AddExamComponent } from "./Examination/add-exam/add-exam.component";
import { CreateTtComponent } from "./create-tt/create-tt.component";
import { ComplainttypeComponent } from './Frontoffice/setup/complainttype/complainttype.component';
import { VisitorsPurposeComponent } from './Frontoffice/setup/visitors-purpose/visitors-purpose.component';
import { SourceComponent } from './Frontoffice/setup/source/source.component';
import { ReferenceComponent } from './Frontoffice/setup/reference/reference.component';
import { HostelModule } from './Reports/hostel/hostel.module';
import { FeeCollectionModule } from './feecollection/feecollection.module';
import { LibraryModule } from './Library/Library.module';
import { IncomeModule } from './income/income.module';
import { HumanResourceModule } from './human_resource/HumanResourceModule';
 
import { CommonModule } from '@angular/common';
//import { GeneralsettingComponent } from './generalsetting/generalsetting.component';


import { HomeworkEvaluationComponent } from './Homework/homework-evaluation/homework-evaluation.component';
import { SesstionSettingComponent } from './system_setting/sesstion-setting/sesstion-setting.component';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
//import { AssignPermissionComponent } from './assign-permission/assign-permission.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentinfoComponent,
    TeacherinfoComponent,
    ParentsdetailsComponent,
    AddHomeworkComponent,
    SearchHomeworkComponent,
    RouteComponent,
    VehicleComponent,
    AssignVehicleComponent,
    EventComponent,
    GallaryComponent,
    NewsComponent,
    MediaManagerComponent,
    PagesComponent,
    MenusComponent,
    BannerImagesComponent,
    AdmitFormComponent,
    AddParentsComponent,
    AddMoreStudComponent,
    AddExpensesComponent,
    SearchExpensesComponent,
    ExpensesHeadComponent,
    CreateComponent,
    AddGalleryComponent,
    AddNewsComponent,
    AddPageComponent,
    StudentAttendanceComponent,
    AttendanceByDateComponent,
    ApproveLeaveComponent,
    //AddExamComponent,
    CreateTtComponent,
    VisitorsPurposeComponent,
    SourceComponent,
    ReferenceComponent,
    ComplainttypeComponent,

    //GeneralsettingComponent,
    

    HomeworkEvaluationComponent,

SesstionSettingComponent,

//AssignPermissionComponent,


    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CertificateModule,
    ReportsModule,
    AcademicsModule,
    HostelModule,
    FeeCollectionModule,
    RouterModule,
    LibraryModule,
    IncomeModule,
    HumanResourceModule,
    //BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
   LoginModule,
    RouterModule.forRoot(
      [
        { path: "", redirectTo: "Login", pathMatch: "full" },
        { path:"Login",component:LoginComponent},
        { path: "admin", component: HomeComponent },
        { path: "parentsdetails", component: ParentsdetailsComponent },
        { path: "addparents", component: AddParentsComponent },
        { path: "add-more-stud", component: AddMoreStudComponent },
      ],
      { useHash: true }
    ),
  ],
  providers: [DatatableService],
  bootstrap: [AppComponent],
})
export class AppModule { }
