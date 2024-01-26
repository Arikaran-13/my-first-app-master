import { Component, Input } from "@angular/core";


@Component({
    selector: "app-filter",
    templateUrl: "./filter.component.html",
    styleUrls: ["./filter.component.css"]
})
export class FilterComponent{
    @Input()
    allProduct:number=0;
    @Input()
    inStockProduct:number=0;
    @Input()
    outOfStockProduct:number=0;
}