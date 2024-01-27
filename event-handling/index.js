document.querySelector('#images').addEventListener('click',(e)=>{
    console.log('clicked inside ul');
})


document.querySelector('#owl').addEventListener('click',(e)=>{
    console.log('cliked owl');
    e.stopPropagation();
})
document.querySelector('#google').addEventListener('click',(e)=>{
    console.log('cliked google');
    e.stopPropagation();
    e.preventDefault();
})
