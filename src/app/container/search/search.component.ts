import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl : "./search.component.html",
    styleUrls : ["./search.component.css"]
})
export class SearchComponent{

    searchResult:string = "";
    
    @ViewChild("searchTextVariable")
    inputElem:ElementRef;

    @Output()
    currentSearchResultEvent:EventEmitter<string> = new EventEmitter<string>();


    handleOnButtonClick():void{

        console.log(this.inputElem);
        this.searchResult = this.inputElem.nativeElement.value;
        this.currentSearchResultEvent.emit(this.searchResult);
    }
}