const color1 = document.querySelector('#indian_Red');
const color2 = document.querySelector('#light_Coral');
const color3 = document.querySelector('#selected-salmon');
const colorResultado = document.querySelector('#resultado');
const combinarButton = document.querySelector('#combinar');
const cardColor1 = document.querySelector('.card-color1');
const cardColor2 = document.querySelector('.card-color2');
let selectedColor = 'color1'; // se asume que el primer color ha sido seleccionado inicialmente
let selectedColor2 = 'color2';
let selectedColor3 = 'color3';
// asegúrate de que chroma.js se haya cargado correctamente
if (typeof chroma !== 'undefined') {
    console.log('chroma.js loaded successfully')
} else {
    console.error('Failed to load chroma.js')
}

color1.style.backgroundColor = '#CD5C5C';
color2.style.backgroundColor = '#F08080';
color3.style.backgroundColor = '#FA8072';

color1.addEventListener('click', function() {
    cardColor1.style.backgroundColor = color1.style.backgroundColor;
});

color1.addEventListener('click', function() {
    if (selectedColor === 'color1') {
        cardColor1.style.backgroundColor = color1.style.backgroundColor;
    } else {
        cardColor2.style.backgroundColor = color1.style.backgroundColor;
    }
});

color2.addEventListener('click', function() {
    if (selectedColor === 'color2') {
        cardColor1.style.backgroundColor = color2.style.backgroundColor;
        selectedColor = 'color2';
    } else {
        cardColor2.style.backgroundColor = color2.style.backgroundColor;
        selectedColor = 'color1';
    }
});

color3.addEventListener('click', function() {
    if (selectedColor === 'color3') {
        cardColor1.style.backgroundColor = color2.style.backgroundColor;
        selectedColor = 'color2';
    } else {
        cardColor2.style.backgroundColor = color2.style.backgroundColor;
        selectedColor = 'color1';
    }
});

combinarButton.addEventListener('click', function() {
    const color1Value = chroma(color1.style.backgroundColor).hex();
    const color2Value = chroma(color2.style.backgroundColor).hex();
    const combinedColor = chroma.mix(color1Value, color2Value);
    colorResultado.style.backgroundColor = combinedColor;
});

combinarButton.addEventListener('click', function() {
    const color1Value = chroma(color1.style.backgroundColor).hex();
    const color3Value = chroma(color3.style.backgroundColor).hex();
    const combinedColor = chroma.mix(color1Value, color3Value);
    colorResultado.style.backgroundColor = combinedColor;
});