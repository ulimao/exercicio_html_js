const form = document.getElementById('formulario');

function eValido(){
    var n1 = parseFloat(document.getElementById("valorA").value);
    var n2 = parseFloat(document.getElementById("valorB").value);

    if (n2 > n1)
        alert(" Valor B é maior que valor A !");
    else
        alert(" Tente novamente!");
}
console.log(form);
