//parseInt => convertir de hexagesimal a rgb
const red = parseInt("FF0000", 16); // 16711680
const pink = parseInt("FFC0CB", 16); // 255

const r = (red >> 16) + (pink >> 16);
const g = ((red >> 8) & 0xff) + ((pink >> 8) & 0xff);
const b = (red & 0xff) + (pink & 0xff);
const colorPromedio = ((r / 2) << 16) | ((g / 2) << 8) | (b / 2);

const combinado = document.getElementById("combinado");
combinado.style.backgroundColor = "#" + colorPromedio.toString(16).padStart(6, '0');