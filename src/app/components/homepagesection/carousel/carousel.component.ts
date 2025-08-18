import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  items: string[] = [
    '/assets/Carousel2.png',
    '/assets/Carousel1.png',
    '/assets/Carousel3.png',
  ];

  currentIndex = 0;


  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

}
