var friendsAge = [12,15, 14, 17, 21]
var ami2 = {
    age:17,
    weight:65,
    height:65,
    color:'Navyblue'
}
var lookingFor = 'age';
var myAge = ami2[lookingFor];
ami2[lookingFor] = 95;
console.log(ami2);