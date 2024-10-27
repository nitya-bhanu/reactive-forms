import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiodataComponent } from "./biodata/biodata.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BiodataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reactive-forms-session';
}
