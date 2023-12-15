import { Component } from '@angular/core';

/* Sibject */
// import { Subject } from 'rxjs';

// const subject = new Subject<number>();

// subject.subscribe({
//   next: (v) => console.log("Observer A : ${v}"),

// })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Formation TP2 [AppComponent]';
}
