import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { ProjectsComponent } from './components/projects/projects';
import { AboutMeComponent } from './components/about-me/about-me';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'resume', redirectTo: 'about-me', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
