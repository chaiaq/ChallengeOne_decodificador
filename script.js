document.getElementById("mostrar").style.display = "none";

function cripmostrarTexto() {
    if (document.getElementById("texto").value !== "") {
        document.getElementById("semtexto").style.display = "none";
        document.getElementById("mostrar").style.display = "inline";
        criptografar();
        enviaTexto();
    }
}


var button = document.getElementById("crip");
button.onclick = cripmostrarTexto;


var novoTexto = '';

function criptografar() {
    novoTexto = '';
    var textoBase = document.getElementById("texto").value;
    for (var letra = 0; letra < textoBase.length; letra++) {
        if (textoBase[letra] == 'e') {
            novoTexto += 'enter';
        } else if (textoBase[letra] == 'i') {
            novoTexto += 'imes';         
        } else if (textoBase[letra] == 'a') {
            novoTexto += 'ai';
        } else if (textoBase[letra] == 'o') {
            novoTexto += 'ober';
        } else if (textoBase[letra] == 'u') {
            novoTexto += 'ufat';
        } else {
            novoTexto += textoBase[letra];
        }
    }
    return novoTexto;
   
}



function enviaTexto() {
    var resultado = document.getElementById("criptografado");
    resultado.innerHTML = novoTexto;
}
