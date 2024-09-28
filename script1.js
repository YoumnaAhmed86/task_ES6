class shape{
    constructor(){
        if(this.constructor===shape){
            throw Error("error")
        }
    }
    area(){
        throw  Error("error")
    }
}

class square extends shape{
    constructor(side){
        super();
        this.side=side;
    }
    area(){
        return this.side*this.side;
    }
}
class rectangle extends shape{
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
}
class circle extends shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        return Math.PI*Math.pow(this.radius,2);
    }
}

var squr= new square(13);
console.log("square area" + squr.area());
var rect= new rectangle(4,10);
console.log("rectangle area" + rect.area());
var circl= new circle(3);
console.log("circle area" + circl.area());
