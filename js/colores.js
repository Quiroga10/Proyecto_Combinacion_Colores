const colorContainers = document.querySelectorAll(".selected-color");
const color1 = document.querySelector(".card-color1");
const color2 = document.querySelector(".card-color2");
const combineButton = document.getElementById("combinar");
const resultado = document.getElementById("resultado");

let selectedColors = [];

colorContainers.forEach((colorContainer) => {
    colorContainer.addEventListener("click", () => {
        const colorValue = window.getComputedStyle(colorContainer).backgroundColor;

        // Verifica si el color ya está seleccionado
        if (selectedColors.length === 0 || (selectedColors.length === 1 && selectedColors[0] !== colorValue)) {
        // Agrega el color seleccionado al array
        selectedColors.push(colorValue);

        // Determina si el color debe aparecer en color1 o color2
        if (selectedColors.length === 1) {
            color1.style.backgroundColor = colorValue;
        } else {
            color2.style.backgroundColor = colorValue;
        }
        }
    });
});

// Evento de clic para combinar los colores seleccionados
combineButton.addEventListener("click", () => {
    if (selectedColors.length === 2) {
        const [color1Value, color2Value] = selectedColors;

        const blendedColor = chroma.mix(color1Value, color2Value, 0.5); // Mezclar los colores en una proporción del 50%

        resultado.style.backgroundColor = blendedColor;
    } else {
        alert("Por favor, seleccione exactamente dos colores para combinar.");
    }
});

//editar los colores seleccionados
const editarButtons = document.querySelectorAll(".editar-color");

editarButtons.forEach((editarButton) => {
  editarButton.addEventListener("click", () => {
    const target = editarButton.getAttribute("data-target");
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";

    // Configurar un evento de cambio en el selector de colores
    colorPicker.addEventListener("change", () => {
      const newColor = colorPicker.value;

      // Actualizar el color en card-color1 o card-color2
      if (target === "color1") {
        color1.style.backgroundColor = newColor;
      } else if (target === "color2") {
        color2.style.backgroundColor = newColor;
      }

      // Eliminar el selector de colores
      colorPicker.remove();
    });

    // Simular un clic en el selector de colores para abrirlo
    colorPicker.click();
  });
});



//Guadar los colores combinados
const guardarButton = document.querySelector(".container-save-colors button");
const saveColors = document.querySelectorAll(".One-color-save");

// Array para almacenar los colores guardados
let savedColorsArray = [];

guardarButton.addEventListener("click", () => {
    const resultadoColor = window.getComputedStyle(resultado).backgroundColor;

    if (resultadoColor) {
        savedColorsArray.push(resultadoColor);

        // Actualizar las clases One-color-save con los colores guardados
        savedColorsArray.forEach((color, index) => {
        if (index < saveColors.length) {
            saveColors[index].style.backgroundColor = color;
        }
        });
    }
});

//reiniciar para combinar más colores, sin borrar los colores guardados
const reiniciarButton = document.getElementById("reiniciar");

reiniciarButton.addEventListener("click", () => {
    // Limpiar los colores seleccionados y las áreas de combinación
    selectedColors = [];
    color1.style.backgroundColor = "#D9D9D9";
    color2.style.backgroundColor =  "#D9D9D9";
    resultado.style.backgroundColor = "transparent";

    // Restaurar los colores guardados en One-color-save
    savedColorsArray.forEach((color, index) => {
        if (index < saveColors.length) {
        saveColors[index].style.backgroundColor = color;
        }
    });
});
