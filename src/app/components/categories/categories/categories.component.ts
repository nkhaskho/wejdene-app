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
      res => this.getCategories()
    )
  }

}
