// ----------------- Variables ------------------------
        var screen = document.getElementById("_calculatorScreen"),
            boton1 = document.getElementById("_btn1"),
            boton2 = document.getElementById("_btn2"),
         botonSuma = document.getElementById("_btnPlus"),
        botonIgual = document.getElementById("_btnEqual"),
            values = [0,0,0,0],
                 i = 0,
    letraOperacion = '';

// ----------------- Funciones ------------------------


boton1.addEventListener('click', function(e){
    e.preventDefault();
    values[i] += 1;
    screen.value+=1;
});

boton2.addEventListener('click', function(e){
    e.preventDefault();
    values[i] += 2;
    screen.value+=2;
});

botonSuma.addEventListener('click', function(e){
    e.preventDefault();
    i++;
    letraOperacion=a;
});

botonIgual.addEventListener("click", function(e){
    e.preventDefault();
    i=0;

    switch(letraOperacion){
        case 'a':
            for(var j=0; j<i.length; j++){
                
            }
        break;
    }
});

