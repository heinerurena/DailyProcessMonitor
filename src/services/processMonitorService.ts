import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {InterfaseStatus} from '../entities/InterfaseStatus';
import { ServiceStatus } from '../entities/ServiceStatus';
import {InterfaseEvent } from '../entities/InterfaseEvent';

@Injectable()
export class processMonitorService {


  constructor(private _http: HttpClient) { }

  public apiTransactionUrL: string = "https://localhost:44317/API/interfases/";


  getServiceStatus(selectedDate: string): Observable<ServiceStatus[]> {
    console.log(selectedDate);
   
    return this._http.get<ServiceStatus[]>(this.apiTransactionUrL + 'GetServiceStatus/' +  selectedDate);
  }

  getInterfaseStatus(serviceId: number, selectedDate: string): Observable<InterfaseStatus[]> {
    console.log(serviceId);

    return this._http.get<InterfaseStatus[]>(this.apiTransactionUrL + 'GetInterfases/' + serviceId + '/' + selectedDate);
  }

  getInterfaseEvents(source: string, event: string, selectedDate: string): Observable<InterfaseEvent[]> {
    console.log(source);

    return this._http.get<InterfaseEvent[]>(this.apiTransactionUrL + 'GetInterfaseEvents/' + source + '/' + event + '/' + selectedDate);
  }


}
