import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Prices
  payPerBumpInSol = 0.00008;
  tokenPassInSol = 0.038;
  servicePassInSol = 0.38;

  title = 'pump-fun-bot-website';
}
