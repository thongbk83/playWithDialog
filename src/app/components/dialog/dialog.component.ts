import { Component, OnInit } from "@angular/core";

import { IPromiseResult, ResultDialog } from "../../model/IPromiseResult";

declare var $: any;

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements IPromiseResult {
  private _result: Promise<ResultDialog>;
  private _resolve: any;
  private _reject: any;

  constructor() {
    this._result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }

  ngOnInit() {
    $(function() {
      // Initialize the igDialog
      $("#dialog").igDialog({
        state: "closed",
        modal: true,
        draggable: false,
        resizable: false,
        height: "350px",
        width: "290px",
        zIndex: 100010
      });

      $("#dialog").igDialog("open");
    });
  }

  get result(): Promise<ResultDialog> {
    return this._result;
  }

  clicked(ok: boolean) {
    $("#dialog").igDialog("close");
    const resultDialog: ResultDialog = {
      resultCode: "OK",
      resultData: {}
    };
    if (ok) {
      this._resolve(resultDialog);
    } else {
      this._reject(resultDialog);
    }
  }
}
