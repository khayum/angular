import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { HttpClientModule } from '@angular/common/http';
import { HandsonGridComponent } from './components/handson-grid/handson-grid.component';
import { HotTableModule } from '@handsontable/angular';

@NgModule({ 
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, StudentFormComponent, FileUploaderComponent, HandsonGridComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,  // Import PrimeNG modules here
    TableModule,
    FormsModule,
    DialogModule,
    FileUploadModule,
    HttpClientModule,
    HotTableModule
  ],
  providers: [PrimeNGConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }