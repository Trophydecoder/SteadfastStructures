import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contactus',
  imports: [FormsModule  ,CommonModule ],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  name: string = '';
  message: string = '';

  sendMessage() {
    if (!this.name.trim() || !this.message.trim()) {
      alert('Please enter both name and message.');
      return;
    }

    const phoneNumber = '27629326569'; // Replace with your WhatsApp number (country code + number, no "+")
    const text = `Name: ${this.name}%0A%0AMessage: ${this.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, '_blank');
  }
}
