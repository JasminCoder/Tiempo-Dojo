/*alerta al clickear en una ciudad
function click_alerta(){
    alert("Cargando informe meteorologico")
}*/

//eliminar cookies
function borrarCookies() {
    var cookie_element = document.querySelector('.cookies'); 
    cookie_element.remove(); 
}



//alerta al clickear en una ciudad + para que tb muestre el nombre de la ciudad q se clickeo
function click_alerta(elemento_a){
    console.log(elemento_a)

    var location = elemento_a.innerText; //innerText modifica el texto

    alert("Cargando informe meteorologico " +location)
}



//cambiar temperatura
function cambioTemperatura(elemento_select) {
    var fOc = elemento_select.value; //Value es el valor que el usuario ingreso (el q ya esta puesto en rojo y negro)
    console.log(fOc);

    for(var i=1; i<=8; i++){
        var elemento_temp = document.querySelector('#temp'+i); //id temp
        var temperatura = elemento_temp.innerText; //para capturar el texto del id q es un numero
        temperatura = parseInt(temperatura); //Transforma el texto en número entero

        var new_temp = 0;

        if(fOc === "C") { 
            //F -> C
            new_temp = Math.round((temperatura-32) * 5 / 9);
        } else {
            //C -> F
            new_temp = Math.round((temperatura * 9 / 5) + 32);
        }

        elemento_temp.innerText = new_temp;

    }

}





