import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomDirDirective } from './custom-dir.directive';
import { HeaderComponent } from './header/header.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MarketplaceItemListComponent } from './marketplace/marketplace-item-list/marketplace-item-list.component';

@NgModule({
  declarations: [
    AppComponent,

    CustomDirDirective,

    HeaderComponent,
    MarketplaceComponent,
    MarketplaceItemListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
