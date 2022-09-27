import { FormResponse } from './../../../models/form-response';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categories/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  newCategory = new Category();
  formResponse = new FormResponse();

  constructor(private categoryService: CategoryService) { }

  async ngOnInit() {
    await this.getCategories();
  }

  async getCategories() {
    await this.categoryService.getAllCategories().subscribe(
      res => { this.categories = res; }
    );
  }

  addCategory() {
    this.categoryService.addCategory(this.newCategory).subscribe(
      res => {
        this.newCategory = new Category();
        this.formResponse.setMessage('Category added.')
        this.getCategories()
      },
      err => this.formResponse.setError('Error while adding category!')
    )
  }

  editCategory(category: Category) {
    this.categoryService.updateCategory(category).subscribe(
      res => category.edit = false,
      err => alert(err)
    )
  }

  async deleteCategory(id: number) {
    console.log(id);
    await this.categoryService.deleteCategory(id).subscribe(
      async res => await this.getCategories()
    )
  }

}
