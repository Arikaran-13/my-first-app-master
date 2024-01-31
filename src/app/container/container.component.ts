import { Component } from "@angular/core";

@Component({
    selector: "app-container",
    templateUrl: "./container.component.html",
    styleUrls : ["./container.component.css"]
})
export class ContainerComponent{
    
    searchResultFromSearchComponent:string = "";
    listenSearchResultEvent(event:string):void{
        console.log("Data from child component",event);
       this.searchResultFromSearchComponent = event;
       console.log(this.searchResultFromSearchComponent);
    }
}