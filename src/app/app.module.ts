import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ShowPopupService } from "./services/showPopupService.service";
import { DialogComponent } from "./components/dialog/dialog.component";

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShowPopupService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
