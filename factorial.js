function factorial(num){
    let factorial = 1;
    for(let i=1; i<=num; i++){
         factorial=factorial*i;
    }
    return factorial;
}
var result = factorial(6)
console.log(result)

