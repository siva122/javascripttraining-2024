//falsy
// 0 false "" null undefined NaN it always return false

// if(0){
//     console.log('false');
// }else{
//     console.log('falsy');
// }
// if(false){
//         console.log('false');
//     }else{
//         console.log('falsy');
//     }
//     if(""){
//         console.log('false');
//     }else{
//         console.log('falsy');
//     }
//     if(undefined){
//         console.log('false');
//     }else{
//         console.log('falsy');
//     }
//     if(null){
//         console.log('false');
//     }else{
//         console.log('falsy');
//     }
// if(NaN){
//     console.log('false');
// }else{
//     console.log('falsy');
// }
// if(1){
//     console.log('true');
// }
// if(true){
//     console.log('true');
// }
// if("0"){
//     console.log('true');
// }
// if([]){
//     console.log('true');
// }
// if({}){
//     console.log('true');
// }
// function test(){
//     console.log('OUTPUT');
// }
// console.log('OUTPUT : ',typeof []);
// console.log('OUTPUT : ',typeof {});
// console.log('OUTPUT : ',typeof test);
//short curcuit

// && ||
// let str='';
// let response= str && 'bye';
// console.log('OUTPUT : ',response);

// || short circuot or
let str='';
let response= str || undefined || 'red';
console.log('OUTPUT : ',response);


