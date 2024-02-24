import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/HomePage/home-page.component';
import { ToolsPageComponent } from './pages/ToolsPage/tools-page.component';
import { ContactPageComponent } from './pages/ContactPage/contact-page.component';

export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "ferramentas",
    component: ToolsPageComponent
  },
  {
    path: "contato",
    component: ContactPageComponent
  }
];
