import { HttpHeaders } from '@angular/common/http';
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

  getStocks(search: string, subCategory: number=0) {
    let url = `${this.endpoint}?`
    if (search.length>0) url += `search=${search}`
    if (subCategory>0) url += `&subcategory=${subCategory}`
    return this.http.get<Stock[]>(url)
  }

  addStock(stock: Stock) {
    let head = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    return this.http.post<Stock>(this.endpoint, stock, {headers: head})
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
