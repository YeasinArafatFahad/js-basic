
function largestNumber(numbers){
    var larger=numbers[0];
    for( var i=0;i<numbers.length;i++){
        var element = numbers[i];
        if(element>larger){
            larger=element;
        }
       
    }
    return larger;
}
var numbers = [65,45,23,11,89,91,67,61]
var output=largestNumber(numbers)
largestNumber([45,78,89]);
console.log('output',output)