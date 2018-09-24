import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/movies.reducer';
import { MoviesEffects } from './effects/movies.effects';

import { Routing } from './routes/movies.routing';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';

// Components
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    EffectsModule.forFeature([MoviesEffects]),
    StoreModule.forFeature('movies', reducer),
    LazyLoadImagesModule
  ],
  declarations: [LandingComponent]
})
export class MoviesModule {}
