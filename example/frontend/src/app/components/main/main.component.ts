import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cases: any = [];

  constructor(private _api: ApiService) {
    this._api.getCaseSchema()
      .subscribe(data => {
        // saving the data to a variable
        this.cases = data.response.cases;
      }, error => {
        console.error(error);
      });
  }

  ngOnInit() { }

  openCase(caseId, amount) {

    // Usually you want to access the trade url via the request on your server
    let trade_url = "VALID TRADE URL";

    if (!caseId || !amount)
      return alert("CaseId or amount not valid!");

    if (amount <= 0)
      return alert("You need to open at least 1 case!");


    this._api.openCase(trade_url , caseId, amount)
      .subscribe(data => {
        // this should be changed to some kind of alert as well, but I am unable to test this properly because of insufficient keys
        console.log(data.response);
      }, error => {
        // simple browser alert with the error
        alert(error.error.text);
      });
  }

}
