import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  endpoint = environment.API_URL + '/api/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.endpoint);
  }

  addCategory(category: Category) {
    return this.http.post<Category>(this.endpoint, category);
  }

  updateCategory(category: Category) {
    return this.http.put(`${this.endpoint}/${category.id}`, category)
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`)
  }

}
