(function(){
    const sliders = [...document.querySelectorAll('.slider_body')];
    const flechaNext = document.querySelector('#next');
    const flechaBefore = document.querySelector('#before');
    let value;

    flechaNext.addEventListener('click', ()=>changePosition(1));
    flechaBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
    
        value = currentElement;
        value += change;
        
        console.log(sliders.length)
        if (value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }
        sliders[currentElement-1].classList.toggle('slider_body--show');
        sliders[value-1].classList.toggle('slider_body--show');
    }

})();

(function(){
    const carrousel = [...document.querySelectorAll('.carrousel_body')];
    const flechaSiguiente = document.querySelector('#siguiente');
    const flechaPrevio = document.querySelector('#previo');
    let value;

    flechaSiguiente.addEventListener('click', ()=>changePosition(1));
    flechaPrevio.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.carrousel_body--show').dataset.id);
    
        value = currentElement;
        value += change;
        
        console.log(carrousel.length)
        if (value === 0 || value == carrousel.length + 1) {
            value = value === 0 ? carrousel.length : 1;
        }
        carrousel[currentElement-1].classList.toggle('carrousel_body--show');
        carrousel[value-1].classList.toggle('carrousel_body--show');
    }

})();

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

//Creamos variable para el cambio de idioma
var check=document.querySelector(".check");
check.addEventListener('click', idioma);
//creamos función
function idioma(){
    let id=check.checked;
    if (id==true){
        location.href = "en/indexEn.html";
    }
    else {
        location.href = "../index.html";
    }
}


    


