import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    cusname: '',
    telephone: '',
    mail: '',
    book: '',
    quantity: 0
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8080/api/submit', this.formData)
      .subscribe(response => {
        console.log('Form submitted successfully:', response);
      }, error => {
        console.error('Error submitting form:', error);
      });
  }
}

