const color1 = document.querySelector('#indian_Red');
const color2 = document.querySelector('#light_Coral');
const color3 = document.querySelector('#selected-salmon');
const color4 = document.querySelector('#selected-darkSalmon');
const color5 = document.querySelector('#selected-lightSalmon');
const colorResultado = document.querySelector('#resultado');
const combinarButton = document.querySelector('#combinar');
const cardColor1 = document.querySelector('.card-color1');
const cardColor2 = document.querySelector('.card-color2');

let selectedColor = 'color1'; // se asume que el primer color ha sido seleccionado inicialmente
let selectedColor2 = 'color2';
let selectedColor3 = 'color3';
let selectedColor4 = 'color4';
let selectedColor5 = 'color5';

// asegúrate de que chroma.js se haya cargado correctamente
if (typeof chroma !== 'undefined') {
    console.log('chroma.js loaded successfully')
} else {
    console.error('Failed to load chroma.js')
}

color1.style.backgroundColor = 'blue';
color2.style.backgroundColor = '#F08080';
color3.style.backgroundColor = '#FA8072';
color4.style.backgroundColor = '#e9967a';
color5.style.backgroundColor = 'white';

color1.addEventListener('click', function() {
    if (selectedColor === 'color1') {
        cardColor1.style.backgroundColor = color1.style.backgroundColor;
    } else {
        if (selectedColor2 !== 'color1') { // si el otro color no es el mismo
            cardColor2.style.backgroundColor = color1.style.backgroundColor;
            selectedColor = 'color1';
        }
    }
});

color2.addEventListener('click', function() {
    if (selectedColor2 === 'color2') {
        cardColor1.style.backgroundColor = color2.style.backgroundColor;
    } else {
        if (selectedColor2 !== 'color2') { // si el otro color no es el mismo
            cardColor2.style.backgroundColor = color2.style.backgroundColor;
            selectedColor = 'color2';
        }
    }
});

color3.addEventListener('click', function() {
    if (selectedColor3 === 'color3') {
        cardColor1.style.backgroundColor = color3.style.backgroundColor;
    } else {
        if (selectedColor !== 'color3' && selectedColor4 !== 'color3' && selectedColor5 !== 'color3') {
            // si el otro color no es el mismo y ningún otro color está ocupando este lugar
            cardColor2.style.backgroundColor = color3.style.backgroundColor;
            selectedColor2 = 'color3';
        }
    }
});

color4.addEventListener('click', function() {
    if (selectedColor2 === 'color4') {
        cardColor2.style.backgroundColor = color4.style.backgroundColor;
    } else {
        if (selectedColor !== 'color4' && selectedColor3 !== 'color4' && selectedColor5 !== 'color4') {
            // si el otro color no es el mismo y ningún otro color está ocupando este lugar
            cardColor2.style.backgroundColor = color4.style.backgroundColor;
            selectedColor2 = 'color4';
        }
    }
});

color5.addEventListener('click', function() {
    if (selectedColor2 === 'color5') {
        cardColor2.style.backgroundColor = color5.style.backgroundColor;
    } else {
        if (selectedColor !== 'color5' && selectedColor3 !== 'color5' && selectedColor4 !== 'color5') {
            // si el otro color no es el mismo y ningún otro color está ocupando este lugar
            cardColor2.style.backgroundColor = color5.style.backgroundColor;
            selectedColor2 = 'color5';
        }
    }
});



combinarButton.addEventListener('click', function() {
    const selectedColorValues = [];

    // Agregar los valores hexadecimales de los colores seleccionados al arreglo
    if (selectedColor === 'color1') {
        selectedColorValues.push(chroma(color1.style.backgroundColor).hex());
    } else {
        selectedColorValues.push(chroma(color2.style.backgroundColor).hex());
    }

    if (selectedColor2 === 'color3') {
        selectedColorValues.push(chroma(color3.style.backgroundColor).hex());
    } else {
        selectedColorValues.push(chroma(color4.style.backgroundColor).hex());
    }

    selectedColorValues.push(chroma(color5.style.backgroundColor).hex());

    // Calcular el color combinado a partir de los valores hexadecimales de los colores seleccionados
    const combinedColor = chroma.average(selectedColorValues);

    // Establecer el color combinado como el color de fondo del resultado
    colorResultado.style.backgroundColor = combinedColor;
});
