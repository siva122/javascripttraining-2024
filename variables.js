console.log('welcome javascript')
//variable
// 3 keywords var ,let,const
var str1='welcome';
//var keyword
//reasisgn
str1=100;
let isBoolean=false;
//let reassign
isBoolean='chnaged the data'
const str2='welcome';
//reassign
//str2=23.34;//
let str;
let str5=null;
console.log('OUTPUT : ',str1);
console.log('OUTPUT : ',isBoolean);
console.log('OUTPUT : ',str2);
console.log('OUTPUT : ',str5);


//datatypes
// Number
// String
// Boolean
// null
// undefined
// BigInt


// //redeclaration
// var x=100;
// console.log('OUTPUT : ',x);
// var x=200;
// console.log('OUTPUT : ',x);
// //redeclaration let
// let y=300;
// console.log('OUTPUT : ',y);
// let yy=400;
// console.log('OUTPUT : ',yy);
// //r4declaration const
// const zz=3000;
// console.log('OUTPUT : ',zz);
// const zz=5000;
// console.log('OUTPUT : ',zz);

//scope   global scope,function scope, block scope
//global scope
// var test1='welcome global';
// //function scope

// function Sample(){
//     var test2='welcome2 function scope';
//     console.log('OUTPUT : ',test2);
// }
// Sample()
// console.log('OUTPUT : ',test1);
// console.log('OUTPUT : ',test2);
//let scope

// let test1='welcome let global';
// //function declaration
// function sample(){
//     let test2='welcome let func scopt';
//     console.log('OUTPUT : ',test2);
// }
// //function calling
// sample();
// console.log('OUTPUT : ',test1);
// console.log('OUTPUT : ',test2);

// const test1='welcome const global';
// //function declaration
// function sample(){
//     const test1='welcome const func scopt';
//     console.log('OUTPUT : ',test1);
// }
// //function calling
// sample();
// console.log('OUTPUT : ',test1);
 //block scope

//var doesnt support block scope
// var test1='welcome var global';
// {
// var test2='welcoe var blok scope'
// }
// console.log('OUTPUT : ',test1);
// console.log('OUTPUT : ',test2);

//let  support block scope
// let test1='welcome let global';
// {
// let test2='welcoe let blok scope'
// }
// console.log('OUTPUT : ',test1);
// console.log('OUTPUT : ',test2);
//const  support block scope
const test1='welcome const global';
{
const test2='welcoe const blok scope'
}
console.log('OUTPUT : ',test1);
console.log('OUTPUT : ',test2);

