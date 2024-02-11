import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl : "./search.component.html",
    styleUrls : ["./search.component.css"]
})
export class SearchComponent{

    searchResult:string = "";
    
    @Output()
    currentSearchResultEvent:EventEmitter<string> = new EventEmitter<string>();


    // updateSearchResult(event : any):void{
    //     this.searchResult = event.target.value;
    // }

    // printSearchElement():void{
    //     console.log(this.searchResult);
    // }

    // handleSearchBtnClick():void{
    //     console.log("From search component btn click");
    //     this.currentSearchResultEvent.emit(this.searchResult);
    // }

    // handleInputEvent():void{
    //     console.log("input event occured ",this.searchResult);
        
    // }

    handleOnButtonClick(searchTextVariable:HTMLInputElement):void{
        this.searchResult = searchTextVariable.value;
        this.currentSearchResultEvent.emit(this.searchResult);
    }
}