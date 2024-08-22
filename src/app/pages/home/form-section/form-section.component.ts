import { Component } from '@angular/core';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss',
})
export class FormSectionComponent {
  email: string = '';
  phone: string = '';
  name: string = '';
  message: string = '';

  clearEmail() {
    this.email = '';
  }

  clearPhone() {
    this.phone = '';
  }

  clearName() {
    this.name = '';
  }

  clearMessage() {
    this.message = '';
  }

  onSubmit() {
    if (this.email && this.phone && this.name && this.message) {
      console.log('Form submitted:', {
        email: this.email,
        phone: this.phone,
        name: this.name,
        message: this.message,
      });
    }
  }

  

}
