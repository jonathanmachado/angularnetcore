import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LandingComponent } from '../components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      title: 'Movies',
      meta: [
        {
          name: 'description',
          content: 'This is an Demo Bootstrap page Description!'
        }
      ],
      links: [
        {
          rel: 'canonical',
          href: 'http://blogs.example.com/bootstrap/something'
        },
        {
          rel: 'alternate',
          hreflang: 'es',
          href: 'http://es.example.com/bootstrap-demo'
        }
      ]
    }
  },
  { path: '**', redirectTo: '' }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
