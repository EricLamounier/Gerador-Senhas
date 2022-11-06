let buttonElement = document.querySelector("#button");
let password = document.querySelector("#pass");
let containerPassword = document.querySelector("#container-pswd");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_-+/|;~^[]{}";
let novaSenha = "";

function scroll_range (){
    var aux = document.getElementById("slider").value;
    document.getElementById("valor").innerHTML = aux
}

function generatePassword (){

    let pass = ""

    /*Gera senha aleatoria*/
    var aux = document.getElementById("slider").value;
    for(var i=0, n = charset.length;i<aux;i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    document.getElementById("popup").style.opacity = 0
    document.getElementById("popup").style.bottom = "1px"
    document.getElementById("pass").innerHTML = pass
    document.getElementById("copy-icon1").style.opacity = 0
}

function copyPassword (){
    let aux = document.getElementById("pass").innerHTML;
    navigator.clipboard.writeText(aux);

    /* Efeito do popup */
    document.getElementById("popup").style.bottom = "10px"
    document.getElementById("popup").style.opacity = 1
    document.getElementById("copy-icon1").style.opacity = 1
}