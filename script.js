//All About Arrays

// alert("Samar");

//forEach map filter find indexOf
// var arr = [1,2,3,4];

// arr.forEach(function(val){
//     console.log(val + " Hello");
// })

// var newAns = arr.map(function(val){
//     return(val+12);
// })

// console.log(newAns);

// var newArr = arr.filter(function(val){
//     return val > 2;
// })
// console.log(newArr);    

// var ans = arr.find(function(val){
//     return val > 2;
// })

// console.log(arr.indexOf(13));


// console.log(ans);

//All about Objects
//Objects are key value pairs
var obj = {
    name: "Samar",
    age: 21,
    isCool: true,
    friends: ["Samar", "Samar1", "Samar2"],
    add: function (x, y) {
        return x + y;
    }
}

Object.freeze(obj);
obj.name = "Samar1";
console.log(obj.name);

//Normal Function returns concept
//length of function arguments = functionName.length;

// var blob = await fetch(`https://randomuser.me/api/`);
// var res =  await blob.json();
// console.log(res);

async function fetchData() {
    // Fetch data from the API
    var blob = await fetch(`https://randomuser.me/api/`);

    // Parse the response as JSON
    var res = await blob.json();

    // Log the parsed JSON object to the console
    console.log(res["results"][0]["name"]["first"] + " " + res["results"][0]["name"]["last"] + " " + res["results"][0]["email"]);
}

// Call the async function to fetch data
fetchData();