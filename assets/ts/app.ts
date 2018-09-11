"use strict"
function add(a:number,b:number):number{
    return (+a) + (+b);
}
function multiple(a:number,b:number):number{
    return (+a)*(+b)
}
function div(a:number,b:number){
    return a/b;
}
function substract(a:number,b:number):number{
    return a - b;
}

function allOper(a:number,b:number){
    console.log("add:",add(a,b));
    console.log("multiple:",multiple(a,b));
    console.log("div:",div(a,b));
    console.log("substract:",substract(a,b));
}

console.log(allOper(3,5));
console.log(allOper(4,7));
