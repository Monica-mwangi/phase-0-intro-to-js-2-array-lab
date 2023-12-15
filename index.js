// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
  
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift('Bob');
}
 function destructivelyRemoveLastCat(name){
    cats.pop("Garfield");
 }  
function destructivelyRemoveFirstCat(name){
    cats.shift("Milo");
}
function appendCat(name){
    return cats.concat(name);
}
    const catsAdd = appendCat('Broom');

function prependCat(name){
    return [name, ...cats];
}
const catsFirst = prependCat('Arnold');

function removeLastCat(){
    return cats.slice(0,-1);
}
const catsLast = removeLastCat('Garfield');

function removeFirstCat(){
    return cats.slice(1);
}
const removeFirst = removeFirstCat('Milo');



