import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Drink } from './models/drink';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
}
const APIUrl = 'https://6056197e91ea2900170d3608.mockapi.io/angular/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Drink[]> {
    return this.httpClient.get<Drink[]>(APIUrl).pipe(
    )
  }
}
