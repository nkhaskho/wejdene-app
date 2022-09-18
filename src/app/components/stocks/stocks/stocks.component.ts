import { Category } from './../../../models/category';
import { CategoryService } from './../../../services/categories/category.service';
import { SubCategoryService } from './../../../services/categories/sub-category.service';
import { SubCategory } from './../../../models/sub-category';
import { FormResponse } from 'src/app/models/form-response';
import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocks: Stock[] = [];
  stockSearch = new Stock();
  formResponse = new FormResponse();
  categories: Category[] = [];
  subCategories: SubCategory[] = [];

  constructor(private stockService: StockService,
              private categoryService: CategoryService,
              private subCategoryService: SubCategoryService) { }

  ngOnInit() {
    this.searchStock();
    this.categoryService.getAllCategories().subscribe(
      res => {
        this.categories = res;
        this.searchStock();
      }
    )
    
  }

  async changeCategory(id: number) {
    await this.subCategoryService.getSubcategoriesByCategoryId(id).subscribe(
      res => {
        this.subCategories = res
      }
    )
  }

  
  searchStock() {
    this.stockService.getStocks().subscribe(
      res => this.stocks = res
    )
  }

  deleteStock(id: number) {
    this.stockService.deleteStock(id).subscribe(
      res => this.searchStock()
    )
  }

}
