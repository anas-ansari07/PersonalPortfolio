import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  imports: [ContactComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
