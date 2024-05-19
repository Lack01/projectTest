import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent, NgxLibmodalComponent, ParentComponent, VoidButtonComponent } from 'ngx-libmodal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent, VoidButtonComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectTest';
}
