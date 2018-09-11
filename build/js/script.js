"use strict";
function add(a, b) {
    return (+a) + (+b);
}
function multiple(a, b) {
    return (+a) * (+b);
}
function div(a, b) {
    return a / b;
}
function substract(a, b) {
    return a - b;
}
function allOper(a, b) {
    console.log("add:", add(a, b));
    console.log("multiple:", multiple(a, b));
    console.log("div:", div(a, b));
    console.log("substract:", substract(a, b));
}
console.log(allOper(3, 5));
console.log(allOper(4, 7));
