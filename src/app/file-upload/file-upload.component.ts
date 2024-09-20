import { Input, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from 'rxjs';

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent {
  status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
  file: File | null = null; // Variable to store file
  @Input() IsMultiple:boolean = false;
  files: File[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];
    const files = event.target.files;
    if (file) {
      this.status = "initial";
      this.file = file;
    }


    else (files.length); {
      this.status = "initial";
      this.files = files;
    }

  }

  onUpload() {
    alert ('Implement this method to call server api')
    // we will implement this method later
  }
}