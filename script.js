const area = document.querySelector('.menu--mobile--area');
let img = document.querySelector('.img');

function abrirMenu(){
    if(area.classList.contains('active') == true){
        area.classList.remove('active');
    }else{
        area.classList.add('active');
    }
}
img.addEventListener('click', abrirMenu);