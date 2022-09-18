import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Stock } from 'src/app/models/stock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  endpoint = environment.API_URL + '/api/stocks'

  constructor(private http: HttpClient) { }

  getStocks() {
    return this.http.get<Stock[]>(this.endpoint)
  }

  addStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.endpoint, stock)
  }

  getStockById(id: number) {
    return this.http.get<Stock>(`${this.endpoint}/${id}`)
  }

  updateStock(stock: Stock) {
    return this.http.put<Stock>(`${this.endpoint}/${stock.id}`, stock)
  }

  deleteStock(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`)
  }

}
