import { SubCategory } from './../../models/sub-category';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  endpoint = environment.API_URL + '/api/subcategories'

  constructor(private http: HttpClient) { }

  getSubcategories() {
    return this.http.get<SubCategory[]>(this.endpoint);
  }

  getSubcategoriesByCategoryId(id: number) {
    return this.http.get<SubCategory[]>(`${this.endpoint}?category=${id}`);
  }

  addSubcategory(subCategory: SubCategory) {
    return this.http.post<SubCategory>(this.endpoint, subCategory);
  }

  deleteSubcategory(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }

  updateSubcategory(subCategory: SubCategory) {
    return this.http.put<SubCategory>(`${this.endpoint}/${subCategory.id}`, subCategory);
  }
}
