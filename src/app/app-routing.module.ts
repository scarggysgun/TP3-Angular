import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketplaceComponent } from './marketplace/marketplace.component';
import { HeaderComponent } from './header/header.component';
import { MarketplaceItemListComponent } from './marketplace/marketplace-item-list/marketplace-item-list.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'marketplaceItem', component: MarketplaceItemListComponent },
  { path: 'Observable', component: ObservableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
