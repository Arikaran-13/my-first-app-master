import { Component } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl : "./search.component.html",
    styleUrls : ["./search.component.css"]
})
export class SearchComponent{

    searchResult:string = "";
    updateSearchResult(event : any):void{
        this.searchResult = event.target.value;
    }
}