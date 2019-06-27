import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule, MatSnackBarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './component/register/register.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { SetPasswordComponent } from './component/set-password/set-password.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http-service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import{FundooMaterialModule} from 'src/app/material.module'
import { from } from 'rxjs';
import { NoteComponent } from './component/note/note.component';
import { IconComponent} from './component/icon/icon.component';
import { NoteComComponent } from './component/note-com/note-com.component';
import { NoteupdateComponent } from './component/noteupdate/noteupdate.component';
import { EditlableComponent } from './component/editlable/editlable.component';
import { LableComponentComponent } from './component/lable-component/lable-component.component';
import {GetLabelcomponentComponent  } from "./component/get-labelcomponent/get-labelcomponent.component";
import { ArchiveComponent } from './component/archive/archive.component';
import { TrachComponent } from './component/trach/trach.component';
import { TrachiconComponent } from './component/trachicon/trachicon.component';
import { LabelNoteComponent } from './component/label-note/label-note.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    SetPasswordComponent,
    DashboardComponent,
    NoteComponent,
    IconComponent,
    NoteComComponent,
    NoteupdateComponent,
    EditlableComponent,
    LableComponentComponent,
    GetLabelcomponentComponent,
    ArchiveComponent,
    TrachComponent,
    TrachiconComponent,
    LabelNoteComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    FlexLayoutModule,
    FundooMaterialModule,
        

  ],
  providers: [HttpService],
  entryComponents:[
    NoteupdateComponent,
    EditlableComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
