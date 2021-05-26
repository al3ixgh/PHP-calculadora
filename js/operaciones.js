// ----------------- Variables ------------------------
var screen = document.getElementById("_calculatorScreen"),
    boton0 = document.getElementById("_btn0"),
    boton1 = document.getElementById("_btn1"),
    boton2 = document.getElementById("_btn2"),
    boton3 = document.getElementById("_btn3"),
    boton4 = document.getElementById("_btn4"),
    boton5 = document.getElementById("_btn5"),
    boton6 = document.getElementById("_btn6"),
    boton7 = document.getElementById("_btn7"),
    boton8 = document.getElementById("_btn8"),
    boton9 = document.getElementById("_btn9"),
    borrar = document.getElementById("_clear"),
    //Operadores
    botonCE = document.getElementById("_btnCE"),
    botonSuma = document.getElementById("_btnPlus"),
    botonResta = document.getElementById("_btnResta"),
    botonMult = document.getElementById("_btnMult"),
    botonDiv = document.getElementById("_btnDiv"),
    botonRaiz = document.getElementById("_btnRaiz"),
    botonPorc = document.getElementById("_btnPorc"),
    botonEntreX = document.getElementById("_btn/x"),
    botonIgual = document.getElementById("_btnEqual"),
    botonNegar = document.getElementById("_btnNegar"),
    values = [0, 0],
    x,
    y,
    resultado,
    letraOperacion = '',
    i = 0;

// ----------------- Funciones ------------------------
boton0.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '0';
    screen.value += 0;
});

boton1.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '1';
    screen.value += 1;
});

boton2.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '2';
    screen.value += 2;
});

boton3.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '3';
    screen.value += 3;
});

boton4.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '4';
    screen.value += 4;
});

boton5.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '5';
    screen.value += 5;
});

boton6.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '6';
    screen.value += 6;
});

boton7.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '7';
    screen.value += 7;
});

boton8.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '8';
    screen.value += 8;
});

boton9.addEventListener('click', function (e) {
    e.preventDefault();
    values[i] += '9';
    screen.value += 9;
});

botonSuma.addEventListener('click', function (e) {
    e.preventDefault();
    i++;
    screen.value = "";
    x = parseInt(values[0]);
    letraOperacion = 'a';
});

botonResta.addEventListener('click', function (e) {
    e.preventDefault();
    i++;
    screen.value = "";
    x = parseInt(values[0]);
    letraOperacion = 'b';
});

botonMult.addEventListener('click', function (e) {
    e.preventDefault();
    i++;
    screen.value = "";
    x = parseInt(values[0]);
    letraOperacion = 'c';
});

botonDiv.addEventListener('click', function (e) {
    e.preventDefault();
    i++;
    screen.value = "";
    x = parseInt(values[0]);
    letraOperacion = 'd';
});

botonRaiz.addEventListener('click', function (e) {
    e.preventDefault();
    i = 0;
    screen.value = "";
    x = parseInt(values[0]);
    letraOperacion = 'e';
});

botonEntreX.addEventListener('click', function (e) {
    e.preventDefault();
    i = 0;
    screen.value = "";
    x = parseInt(values[0]);
    letraOperacion = 'f';
});

botonPorc.addEventListener('click', function (e) {
    e.preventDefault();
    i = 0;
    screen.value = "";
    x = parseInt(values[0]);
    letraOperacion = 'g';
});

botonIgual.addEventListener("click", function (e) {
    e.preventDefault();
    i = 0;
    y = parseInt(values[1]);

    /* Operaciones:
    a: suma
    b: resta
    c: multiplicación
    d: división    
    e: raiz cuadrada   
    f: 1/x 
    g: porcentaje
    */

    switch (letraOperacion) {
        case 'a':
            resultado = x + y;
            resultado = resultado.toFixed(2);
            break;
        case 'b':
            resultado = x - y;
            resultado = resultado.toFixed(2);
            break;
        case 'c':
            resultado = x * y;
            resultado = resultado.toFixed(2);
            break;
        case 'd':
            if (y != 0) {
                resultado = x / y;
                resultado = resultado.toFixed(2);
            } else {
                resultado = "Syntax Error";
            }
            break;
        case 'e':
            resultado = Math.sqrt(x);
            resultado = resultado.toFixed(2);
            break;
        case 'f':
            resultado = 1 / x;
            resultado = resultado.toFixed(2);
            break;
        case 'g':
            if (y == 0) {
                resultado = x / 100;
                resultado = resultado.toFixed(2);
            }
            else {
                resultado = resultado / 100;
                resultado = resultado.toFixed(2);
            }
        default:
            break;
    }
    screen.value = resultado;
});

borrar.addEventListener('click', function () {
    screen.value = "";
    i = 0;
    values = [0, 0];
});

botonCE.addEventListener('click', function () {
    if ((values[0] != 0) && (values[1] != 0)) {
        values[1] = '0';
        screen.value = "";
    }
    else if ((values[0] != 0) && (values[1] == 0)) {
        values[0] = '0';
        screen.value = "";
    }
});

//hace falta mirar cuando haya 2 numeros negar el segundo
botonNegar.addEventListener('click', function (e) {
    e.preventDefault();
    i = 0;
    screen.value = "";
    x = parseFloat((values[0])*(-1));
});