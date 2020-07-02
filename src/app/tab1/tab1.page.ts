import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  items= [];
  page = 0;
  page_limit =24;
  constructor(private productservice:ProductsService) {}
  ngOnInit() {

    this.loadData(false, "");
  
    
  }
  loadData(isFirstLoad,event) {
    this.productservice.getDetails('?items_per_page=' + this.page_limit + '&page=' + this.page)
    .subscribe((data: any) => {

      for (let i = 0; i < data['list'].length; i++) {
        this.items.push(data['list'][i]);
      }

      if (isFirstLoad)
        event.target.complete();

      this.page++;
    }, error => {
      console.log(error);
    })
}

doInfinite(event) {
  this.loadData(true, event);
}
 
}
