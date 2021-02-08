function prime(num){
    for(i = 2; i<num;i++){
        if(num %i==0){
            return 'not prime'
        }
    }
    return 'prime'
}
var result=prime(13);
console.log(result)