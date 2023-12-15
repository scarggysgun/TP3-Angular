import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent implements OnInit, OnDestroy {
  seconds: number = 0;
  counterSubscription: Subscription | undefined;

  ngOnInit(): void {
    const counter = interval(3000);
    this.counterSubscription = counter.subscribe({
      next: (value) => {
        this.seconds = value;
      },
      error: (error) => {
        console.log('ERROR : ', error);
      },
      complete: () => {
        console.log('Terminé');
      },
    });
  }

  ngOnDestroy(): void {
    this.counterSubscription?.unsubscribe();
  }
}
