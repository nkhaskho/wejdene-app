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

  getTickets(search: string, priority: string, status: string) {
    let url = `${this.endpoint}?`
    if (search.length>0) url += `search=${search}`
    if (status.length>0) url += `status=${status}`
    if (priority.length>0) url += `&priority=${priority}`
    return this.http.get<Ticket[]>(url)
  }

  getUserTickets() {
    let url = this.endpoint;
    if (localStorage.getItem('role')=='user') {
      url += `?createdBy=${localStorage.getItem('id')}`
    }
    if (localStorage.getItem('role')=='agent') {
      url += `?assignee=${localStorage.getItem('id')}`
    }
    return this.http.get<Ticket[]>(url)
  }

  addTicket(ticket: Ticket) {
    return this.http.post<Ticket>(this.endpoint, ticket)
  }

  getTicketById(id: number) {
    return this.http.get<Ticket>(`${this.endpoint}/${id}`)
  }

  updateTicket(ticket: Ticket) {
    return this.http.put<Ticket>(`${this.endpoint}/${ticket.id}`, ticket)
  }

  deleteTicket(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`)
  }

}
