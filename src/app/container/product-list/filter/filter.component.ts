import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";


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

    currentSelectedRadioButton:string = "all";
    
    @Output()
    onSelectedFilterRadioButtonEvent : EventEmitter<string> = new EventEmitter<string>();
    
    onChangeFilterRadioBtn():void{
        console.log("current selected radio button",this.currentSelectedRadioButton);
        this.onSelectedFilterRadioButtonEvent.emit(this.currentSelectedRadioButton);
    }

}