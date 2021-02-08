function arraySum(num){
    var sum = 0;
    for(var i = 0;i<num.length;i++){
        var element=num[i];
        sum= sum + element;
    }
    return sum;
}
var num = [10, 20, 30, 40, 50]
var result = arraySum(num)
console.log(result)
var result2 = arraySum([20, 20, 30, 40, 50, 50])
console.log(result2)