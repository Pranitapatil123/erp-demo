import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentRoutingModule } from "./students_Info/student-routing.module";
import { LibraryRoutingModule } from "./Library/Library-routing.module";
import { DownloadRoutingModule } from "./Download-Center/downloadcenter-routing.module";
import { CommunicateRoutingModule } from "./Communicate/communicate-routing.module";
import { HostelRoutingModule } from './Hostel/hostel-routing.module';
import { InventoryRoutingModule } from "./Inventory/inventory-routing.module";
import { SystemRoutingModule } from "./system_setting/system-routing.module";
import { HomeworkRoutingModule } from "./Homework/homework-routing.module";
import { TransportRoutingModule } from "./Transport/Transport-routing.module";
import { FrontcmsRoutingModule } from "./Frontcms/Frontcms-routing.module";
import { FeeCollectionRoutingModule } from "./feecollection/feecollection-routing.module";
import { FrontofficeRoutingModule } from "./Frontoffice/Frontoffice-routing.module";
import { CertificateRoutingModule } from "./certificate/certificate-routing.module";
import { ReportsRoutingModule } from "./Reports/reports-routing.module";
import { HumanResourceRoutingModule } from "./human_resource/human_resource-routing.module";
import { AcademicsModule } from "./academics/academics.module";
import { IncomeRoutingModule } from "./income/income-routing.module";
import { ExpenseRoutingModule } from "./expenses/expense-routing.module";
import { DashboardRoutingModule } from "./dashboard/dashboard-routing.module";
import { ExaminationRoutingModule } from "./Examination/Examination-routing.module";
import { OnlineExamRoutingModule } from "./online-exam/online-exam-routing.module";
import { CreateComponent } from "./create/create.component";
import { AddGalleryComponent } from "./add-gallery/add-gallery.component";
import { AddNewsComponent } from "./add-news/add-news.component";
import { AddPageComponent } from "./add-page/add-page.component";
import { CreateTtComponent } from "./create-tt/create-tt.component";
import { AttendanceRoutingModule } from "./Attendance/Attendance-routing.module";
import { Issue1Component } from "./Library/issue-return/issue1/issue1.component";

import { LoginModule } from './login/login.module';

const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "create-tt", component: CreateTtComponent },
  { path: "addGallery", component: AddGalleryComponent },
  { path: "addNews", component: AddNewsComponent },
  { path: "addPage", component: AddPageComponent },
  { path: "issue1", component: Issue1Component },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    StudentRoutingModule,
    CommunicateRoutingModule,
    SystemRoutingModule,
    LibraryRoutingModule,
    DownloadRoutingModule,
    InventoryRoutingModule,
    HomeworkRoutingModule,
    TransportRoutingModule,
    FrontcmsRoutingModule,
    FeeCollectionRoutingModule,
    HostelRoutingModule,
    FrontofficeRoutingModule,
    CertificateRoutingModule,
    ExaminationRoutingModule,
    AcademicsModule,
    ReportsRoutingModule,
    HumanResourceRoutingModule,
    ExpenseRoutingModule,
    IncomeRoutingModule,
    OnlineExamRoutingModule,
    DashboardRoutingModule,
    AttendanceRoutingModule,
    LoginModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
