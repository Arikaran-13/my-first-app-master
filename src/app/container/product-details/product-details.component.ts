import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Product } from "src/app/Models/Product";
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
    selector: "product-detail",
    templateUrl: "product-details.component.html",
    styleUrls: ["product-details.component.css"]
})
export class ProductDetailsComponent{

    @Input()
    selectedProductDetail : Product;
    

    
}