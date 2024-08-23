
function reemplazarVocales() {
    let texto = document.getElementById("userInput").value;

    let resultado = texto.replace(/[aeiou]/g, function(letra) {
        switch(letra) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });

    document.getElementById("resultado").textContent = resultado;
    document.getElementById("copiarbutton").removeAttribute('disabled');
}

function restaurarTexto() {
    let texto = document.getElementById("userInput").value;

    let resultado = texto.replace(/ai/g, 'a')
                         .replace(/enter/g, 'e')
                         .replace(/imes/g, 'i')
                         .replace(/ober/g, 'o')
                         .replace(/ufat/g, 'u');

    document.getElementById("resultado").textContent = resultado;
    document.getElementById("copiarbutton").removeAttribute('disabled');
}

function copiarTexto() {
    let texto = document.getElementById("resultado").textContent;
    var indicacion = document.getElementById('indicacion');

    navigator.clipboard.writeText(texto).then(function() {
 
    }).catch(function(error) {
    
    });
    
    indicacion.style.display = 'block'; // Muestra el mensaje
    setTimeout(function() {
        indicacion.style.display = 'none'; // tem 3 seg
    }, 3000);
  
}

function verificarTexto() {
    let texto = document.getElementById("userInput").value;
    let notificacion = "⚠️Solo letras minúsculas y sin acentos";
    document.getElementById("button_e").removeAttribute('disabled');
    document.getElementById("button_d").removeAttribute('disabled');
    document.querySelector("#copiarbutton").setAttribute('disabled','true');
    


    // Expresiones regulares para detectar mayúsculas, acentos y caracteres especiales
    let mayusculas = /[A-Z]/;
    let acentos = /[áéíóúÁÉÍÓÚ]/;
    let caracteresEspeciales = /[^a-zA-Z0-9\s,.;:¡!¿?]/;
    let RespuestaCaracteres = "🚫El texto contiene caracteres no admitidos. "
    
    if (mayusculas.test(texto)) {
        notificacion = RespuestaCaracteres;
        document.querySelector("#button_e").setAttribute('disabled','true');
        document.querySelector("#button_d").setAttribute('disabled','true');
    }
    if (acentos.test(texto)) {
        notificacion = RespuestaCaracteres;
        document.querySelector("#button_e").setAttribute('disabled','true');
        document.querySelector("#button_d").setAttribute('disabled','true');
    }
    if (caracteresEspeciales.test(texto)) {
        notificacion = RespuestaCaracteres;
        document.querySelector("#button_e").setAttribute('disabled','true');
        document.querySelector("#button_d").setAttribute('disabled','true');
    }
    

    document.getElementById("notificacion").textContent = notificacion;
}
