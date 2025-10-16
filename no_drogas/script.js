const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
if (menuBtn && menu){
    menuBtn.addEventListener('click',()=>{
        menu.classList.toggle('active');
    })
}else{
    consolr.warn('No hay elementos de menu');
}