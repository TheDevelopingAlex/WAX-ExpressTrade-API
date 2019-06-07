import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getCaseSchema() {
    return this._http.get<CaseSchema>("/caseschema");
  }

  openCase(trade_url, caseId, amount) {
    return this._http.post<CaseSchema>('/opencase', { trade_url: trade_url, caseId: caseId, amount: amount });
  }

}

interface CaseSchema {
  status: any,
  time: any,
  response: any
}
