import { FormResponse } from 'src/app/models/form-response';
import { Category } from 'src/app/models/category';
import { SubCategoryService } from './../../../services/categories/sub-category.service';
import { CategoryService } from 'src/app/services/categories/category.service';
import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models/sub-category';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

  categories: Category[] = [];
  subcategories: SubCategory[] = [];
  newSubCategory = new SubCategory();
  formResponse = new FormResponse();

  constructor(private categoryService: CategoryService,
              private subCategoryService: SubCategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      res => {
        this.categories = res;
        this.newSubCategory.category = this.categories[0].id;
      }
    );
    this.getAllSubCategories();
  }

  async getAllSubCategories() {
    await this.subCategoryService.getSubcategories().subscribe(
      res => { this.subcategories = res }
    );
  }

  addSubCategory() {
    this.subCategoryService.addSubcategory(this.newSubCategory).subscribe(
      res => {
        this.formResponse.setMessage('Subcategory added.')
        this.newSubCategory = new SubCategory();
        this.newSubCategory.id = this.categories[0].id;
        this.getAllSubCategories();
      }
    )
  }

  async deleteSubCategory(id: number) {
    console.log(id);
    this.subCategoryService.deleteSubcategory(id).subscribe(
      res => this.getAllSubCategories()
    )
  }

}
