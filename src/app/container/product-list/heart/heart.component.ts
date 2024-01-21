import { Component } from "@angular/core";

@Component({
    selector: "heart-icon",
    templateUrl : "./heart.component.html",
    styleUrls : ["./heart.component.css"]
})
export class HeartComponent{

    flag:boolean = false;
    changeHeartColor(event:any):void{  

        if(!this.flag){
            event.target.style.color= "red";
            this.flag=true;
        }
        else{
            event.target.style.color= "black";
            this.flag = false;
        }
    }

}