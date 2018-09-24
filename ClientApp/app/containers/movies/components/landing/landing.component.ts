import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';

// Reducers
import * as fromMovies from '../../reducers';

// Actions
import * as MoviesActions from '../../actions/movies.actions';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  // Public Variables
  public movies: any[] = undefined;

  // Private Variables
  private unsuscribe: Subject<any> = new Subject();

  // Private Observables
  private movies$: Observable<any> = this.store.select(
    state => state.movies.data
  );

  constructor(private store: Store<fromMovies.State>) {}

  ngOnInit() {
    this.getMovies();

    this.movies$.pipe(takeUntil(this.unsuscribe)).subscribe(response => {
      if (response) {
        this.movies = response;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsuscribe.next();
    this.unsuscribe.complete();
  }

  getMovies() {
    this.store.dispatch(new MoviesActions.GetMovies());
  }

  getDefaultImage(event): void {
    event.target.src = '/images/movie_placeholder.png';
  }
}
