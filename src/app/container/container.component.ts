import { Component, OnInit, ViewChild } from "@angular/core";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
    selector: "app-container",
    templateUrl: "./container.component.html",
    styleUrls : ["./container.component.css"]
})
export class ContainerComponent{
    
    searchResultFromSearchComponent:string = "";

    @ViewChild("product-list")
    productListComponent:ProductListComponent;
    
    
    listenSearchResultEvent(event:string):void{
        console.log("Data from child component",event);
       this.searchResultFromSearchComponent = event;
       console.log(this.searchResultFromSearchComponent);

    }

}