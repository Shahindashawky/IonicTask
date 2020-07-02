import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { UserGuard } from '../services/user-guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: 'src/app/tab1/tab1.module#Tab1PageModule',
        canActivate:[UserGuard]


      },
      {
        path: 'tab2',
        loadChildren: 'src/app/tab2/tab2.module#Tab2PageModule',
        canActivate:[UserGuard]

        

      },
      {
        path: 'tab3',
        loadChildren: 'src/app/tab3/tab3.module#Tab3PageModule',
        canActivate:[UserGuard]


        

      },
      // {
      //   path: '',
      //   redirectTo: '/tabs/tab1',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
