// to find the number divisible by 2 this is the traditional way to do this code

// const array =[1,2,3,4,5,6,7,8];

// let isSomeDividedby2= false;

// for (var i = 0; i < array.length; i++) {
//    if (array[i]%2 ===0){
//     isSomeDividedby2=true;
//     break;

//    }  
// }


// now we can do this by following method 
// this is the simple method to do so 

const array =[1,21,3,4,52,6,7,8];

let isSomeDividedby2= array.some(num=>num%2===0);
console.log('isSomeDividedby2',isSomeDividedby2);



// for every divided by 2 
let everyDividedby2= array.every(num=>num%2===0);
console.log('everyDividedby2',everyDividedby2);


