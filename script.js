// alert("Samar");

//forEach map filter find indexOf
var arr = [1,2,3,4];

// arr.forEach(function(val){
//     console.log(val + " Hello");
// })

// var newAns = arr.map(function(val){
//     return(val+12);
// })

// console.log(newAns);

var newArr = arr.filter(function(val){
    return val > 2;
})
console.log(newArr);    