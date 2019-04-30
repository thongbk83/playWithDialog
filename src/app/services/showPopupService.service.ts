import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  ViewContainerRef
} from "@angular/core";
import { DialogComponent } from "../components/dialog/dialog.component";
import { IPromiseResult } from "../model/IPromiseResult";

@Injectable()
export class ShowPopupService {
  rootViewContainer: ViewContainerRef;

  constructor(private factoryResolver: ComponentFactoryResolver) {}

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  public addDialogComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(
      DialogComponent
    );
    const componentRef = factory.create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.insert(componentRef.hostView);
    let ret = (<IPromiseResult>componentRef.instance).result;
    return ret;
  }
}
