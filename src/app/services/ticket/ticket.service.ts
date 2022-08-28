import { Ticket } from './../../models/ticket';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  endpoint = environment.API_URL + '/api/tickets'

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get<Ticket[]>(this.endpoint)
  }

}
