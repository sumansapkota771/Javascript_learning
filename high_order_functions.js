// function setMyName(){
//     console.log('hello world !!');
// }

// setMyName();


// 2

// function setMyName(name=''){
//     console.log(`hello ${name}`);
// }

// setMyName('js');
// setMyName('React');

// 3.

// function setMyName(name=''){
//     console.log(`hello ${name}`);
// }
// function setMyName2(callback){
//   callback;

// }
//  function sucess(){
//     console.log('sucess');
//  }
//  sucess('sucess1');
// 4.


// function setMyName(name=''){
//     console.log(`hello ${name}`);
// }
// function setMyName2(callback){
//   callback;

// }
//  function sucess(){
//     console.log('sucess');
//  }
//  sucess('sucess1');

// we use functional programming for code reuseablity,functional programming,api response 



function fetchData(callback){
    console.log('please wait');
    setTimeout(() => {
        console.log("after 3e sec it is executed ");
        callback();
    }, 3000);  

}

fetchData(()=>{
    console.log('welcome');
});

// first lecture finished

