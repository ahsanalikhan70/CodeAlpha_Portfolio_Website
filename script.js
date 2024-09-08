const hamberger = document.getElementById('hamberger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
// var typedText = document.getElementById('typedText');


if(hamberger){
    hamberger.addEventListener('click' , (e)=>{
        e.preventDefault();
        console.log("hello")

        menu.classList.add('newclass');
    })
}

if(close){
    close.addEventListener('click' , (e)=>{
        e.preventDefault();
        menu.classList.remove('newclass');
    })
}



