let menu = document.querySelector('.menu');
let checkbox = document.querySelector('input[type="checkbox"]');

function disparaMenu(){
if(checkbox.checked){
    menu.style.webkitAnimation =''
    menu.style.webkitAnimation = 'opacidadeOn 1s ease'
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';

}else{
    menu.style.webkitAnimation =''
    menu.style.webkitAnimation = 'opacidadeOff 1s ease'  
    setTimeout(()=>menu.style.display = 'none',500)
}
} 

function getWidth(){
    let telaL = window.innerWidth
    if(telaL > 650){
        menu.style.display = 'flex'
        menu.style.flexDirection = 'row';
    }else{
        if(checkbox.checked && telaL < 650){
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
        }
        else if(checkbox.checked === false && telaL < 650){
            menu.style.display = 'none';  
        }
    }
}

window.addEventListener('resize', function(){
     getWidth();
    })


