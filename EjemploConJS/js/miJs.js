//definir la función sumar
function sumar() {
    //rescato desde el formulario num1 y num2
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    //obtener el resultado de la suma
    var resultado = parseInt(n1) + parseInt(n2);
    alert("El resultado de la suma es: " + resultado);
}