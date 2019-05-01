import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef
} from "@angular/core";

import { DialogComponent } from "../components/dialog/dialog.component";
import { IPromiseResult, ResultDialog } from "../model/IPromiseResult";

@Injectable()
export class ShowPopupService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  showConfirmDialog() {
    // Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(DialogComponent)
      .create(this.injector);

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.body.appendChild(domElem);

    // Wait some time and remove it from the component tree and from the DOM
    let ret = (<IPromiseResult>componentRef.instance).result;

    return new Promise(resolve => {
      ret.then((data: ResultDialog) => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
        resolve(data);
      });
    });
  }
}
