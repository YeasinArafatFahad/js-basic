function fibonacci(n){
    var fibo=[1, 1]
    for(var i=2; i<=n; i++){
        var nextfibo=fibo[i-1]+fibo[i-2]
        fibo.push(nextfibo)
    }
    return fibo;
}
var result = fibonacci(12)
console.log(result)