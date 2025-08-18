import { Component } from '@angular/core';
import { CarouselComponent } from "../../components/homepagesection/carousel/carousel.component";
import { AboutusComponent } from "../../components/homepagesection/aboutus/aboutus.component";
import { GetQuoteComponent } from "../../components/homepagesection/get-quote/get-quote.component";
import { ServicesComponent } from "../../components/homepagesection/services/services.component";
import { ContactusComponent } from "../../components/global/contactus/contactus.component";

@Component({
  selector: 'app-homepage',
  imports: [CarouselComponent, AboutusComponent, GetQuoteComponent, ServicesComponent, ContactusComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
