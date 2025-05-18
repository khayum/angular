import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  uploadedFiles: { [key: number]: any } = {}; // Stores uploaded files by fileTypeId
  uniqueFileTypes: any[] = [];

  fileUploadTypes = [
    { typeId: 1, typeName: 'First', mandatory: true, fileTypeId: 1, fileTypeName: 'AAA', fileType: 'dwg' },
    { typeId: 1, typeName: 'First', mandatory: true, fileTypeId: 2, fileTypeName: 'BBB', fileType: 'pdf' },
    { typeId: 1, typeName: 'First', mandatory: false, fileTypeId: 3, fileTypeName: 'CCC', fileType: 'pdf' },
    { typeId: 2, typeName: 'Second', mandatory: true, fileTypeId: 1, fileTypeName: 'AAA', fileType: 'dwg' },
    { typeId: 2, typeName: 'Second', mandatory: true, fileTypeId: 2, fileTypeName: 'BBB', fileType: 'pdf' },
    { typeId: 2, typeName: 'Second', mandatory: false, fileTypeId: 3, fileTypeName: 'CCC', fileType: 'pdf' },
    { typeId: 3, typeName: 'Third', mandatory: false, fileTypeId: 4, fileTypeName: 'DDD', fileType: 'pdf' },
    { typeId: 3, typeName: 'Third', mandatory: false, fileTypeId: 4, fileTypeName: 'DDD', fileType: 'pdf' }
  ];

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.uniqueFileTypes = this.getUniqueFileTypes();
  }

  getUniqueFileTypes(): any[] {
    const uniqueMap = new Map<number, any>();
    
    this.fileUploadTypes.forEach(fileType => {
      if (!uniqueMap.has(fileType.fileTypeId)) {
        uniqueMap.set(fileType.fileTypeId, fileType);
      }
    });

    return Array.from(uniqueMap.values());
  }

  onUpload(event: any, fileTypeId: number) {
    const uploadedFile = event.files[0];
    const fileURL = URL.createObjectURL(uploadedFile);
    uploadedFile['thumbnailUrl'] = fileURL;
    this.uploadedFiles[fileTypeId] = uploadedFile;

    const file = event.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.http.post('http://localhost:3000/upload', formData).subscribe(response => {
      console.log('Upload success:', response);
    });

    console.log(`File Uploaded for type ${fileTypeId}:`, uploadedFile);
  }

  onDownload(file: any) {
    console.log('Downloading:', file.name);
  }

}
