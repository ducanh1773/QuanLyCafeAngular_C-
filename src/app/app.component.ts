import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quanlycaffe';
}
