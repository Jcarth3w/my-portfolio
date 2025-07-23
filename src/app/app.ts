import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { Navbar } from '/Users/jackcarthew/Desktop/Work/Portfolio/my-portfolio/src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
