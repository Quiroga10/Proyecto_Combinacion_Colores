//Modo Dark
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

//Redigir Páginas
function registrar(){
    window.location.href = "../registrarse.html";
}

function accesoHome(){
    window.location.href = "../home.html";
}