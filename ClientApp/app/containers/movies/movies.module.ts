import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/movies.reducer';
import { MoviesEffects } from './effects/movies.effects';

import { Routing } from './routes/movies.routing';

// Components
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    EffectsModule.forFeature([MoviesEffects]),
    StoreModule.forFeature('movies', reducer)
  ],
  declarations: [LandingComponent]
})
export class MoviesModule {}
