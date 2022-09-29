import { ActivatedRoute } from '@angular/router';
import { SubCategoryService } from './../../../services/categories/sub-category.service';
import { CategoryService } from './../../../services/categories/category.service';
import { SubCategory } from './../../../models/sub-category';
import { Category } from './../../../models/category';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from 'src/app/models/stock';
import { FormResponse } from './../../../models/form-response';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {

  formResponse = new FormResponse();
  categories: Category[] = [];
  selectedCategory: number = 0;
  subCategories: SubCategory[] = [];
  stock = new Stock();

  constructor(private stockService: StockService,
              private categoryService: CategoryService,
              private subCategoryService: SubCategoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let stockId = this.activatedRoute.snapshot.params['id'] || '0'
    if (stockId != 'new') {
      this.stockService.getStockById(parseInt(stockId)).subscribe(
        res => this.stock = res
      )
    }
    this.categoryService.getAllCategories().subscribe(
      res => this.categories = res
    )
    this.subCategoryService.getSubcategories().subscribe(
      res => this.subCategories = res
    )
  }

  save() {
    if (this.stock.name == '' || this.stock.model=='' || this.stock.subcategory==0) {
      this.formResponse.setError('Please fill all required fields.')
    } else {
      if (this.stock.id == 0) {
        // Add new stock
        this.stockService.addStock(this.stock).subscribe(
          res => {
            this.stock = new Stock();
            this.formResponse.setMessage(`Stock "${res.name}" added successfully.`)
          }
        ) 
      } else {
        // update existing one
        this.stockService.updateStock(this.stock).subscribe(
          res => {
            this.formResponse.setMessage(`Stock "${res.name}" updated successfully.`)
          }
        ) 
      }
    }
  }

  async changeCategory(id: number) {
    await this.subCategoryService.getSubcategoriesByCategoryId(id).subscribe(
      res => {
        this.subCategories = res
      }
    )
  }

  addStock() {
    if (this.stock.id == 0) {
      this.stockService.addStock(this.stock).subscribe(
        res => {
          this.formResponse.setMessage('Stock added successfully.');
          this.stock = new Stock();
        },
        err => this.formResponse.setError('Error while adding stock.')
      )
    } else {
      this.stockService.updateStock(this.stock).subscribe(
        res => {
          this.formResponse.setMessage('Stock updated successfully.');
          this.stock = new Stock();
        },
        err => this.formResponse.setError('Error while updaing stock.')
      )
    }
  }


}
