import { Component } from "@angular/core";

@Component({
    selector: "app-container",
    templateUrl: "./container.component.html",
    styleUrls : ["./container.component.css"]
})
export class ContainerComponent{
    name:string="";
    addtoCartButtonText : string ="Add to Cart";
    addToCart:number =0;
    product ={
        name: "Iphone 15 Pro Max",
        price: 1999,
        discount: 8.7,
        color: "black",
        inStock : 5,
        image: "/assets/images/iphone15promax.jpg"
    }

    getDiscountedPrice() : number{
        return this.product.price - (this.product.price * this.product.discount / 100);
    }

    inputEventOccured(event:any){
        console.log(event.target.value);
        this.name = event.target.value;
    }

    incrementCartValue():void{
        if(this.addToCart < this.product.inStock)
        this.addToCart++;
    }

    decrementCartValue():void{
        if(this.addToCart > 0){
            this.addToCart--;
            this.updateAddtoCartButtonText();
        }
        else if(this.addToCart===0){
            this.updateAddtoCartButtonText();
        }
    }

    handleIncrementalButtonClick(event:any):void{
        this.incrementCartValue();
        this.updateAddtoCartButtonText();
    }

    updateAddtoCartButtonText():void{
        if(this.addToCart === 0){
            this.addtoCartButtonText="Add to Cart"
        }
        else{
            this.addtoCartButtonText =  `Add to Cart ${this.addToCart} Item`;
        }
    }
}