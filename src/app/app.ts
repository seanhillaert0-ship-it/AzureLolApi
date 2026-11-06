import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './Shared/navbar/navbar';
import { Home } from './Shared/home/home';

@Component({
  imports: [RouterOutlet, RouterLink, Navbar, Home],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AzureLolApi');
}
