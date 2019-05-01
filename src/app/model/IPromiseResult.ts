export interface ResultDialog {
  resultCode: string;
  resultData: any;
}

export interface IPromiseResult {
  readonly result: Promise<ResultDialog>;
}
