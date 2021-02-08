var num = [3, 2, 4, 3, 5, 4, 6, 7, 6, 8, 9]
var uniquename=[]
for(var i=0; i<num.length; i++){
    var element = num[i]
    var index = uniquename.indexOf(element)
    if(index == -1){
        uniquename.push(element)
    }
}
console.log(uniquename)