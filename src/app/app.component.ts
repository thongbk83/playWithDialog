import {
  Component,
  NgModule,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ShowPopupService } from "./services/showPopupService.service";
import { DialogComponent } from "./components/dialog/dialog.component";
import { ResultDialog } from "./model/IPromiseResult";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "demoangular";

  // @ViewChild("dialog", { read: ViewContainerRef })
  // viewContainerRef: ViewContainerRef;

  //constructor(service: Service, viewContainerRef: ViewContainerRef) {
  constructor(protected service: ShowPopupService) {}

  ngOnInit() {
    // this.service.setRootViewContainerRef(this.viewContainerRef);
  }

  showDialog() {
    this.service
      .showConfirmDialog()
      .then((data: ResultDialog) => {
        alert("Logged in! Status:" + data.resultCode);
        this.destroy();
      })
      .catch(error => {
        alert("Login failed. Error: ");
        this.destroy();
      });
  }

  private destroy(): void {
    //this.viewContainerRef.clear();
  }
}
