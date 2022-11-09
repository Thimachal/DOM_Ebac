const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >=2;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeBenficioario = document.getElementById('nome-beneficiario');

    if (!validaNome(nomeBenficioario.value)){
        alert("Nome Incompleto");
    }else{
        alert("Tudo ok");
    }

    const numeroA = document.getElementById('num-conta');
    const numeroB = document.getElementById('val-deposito');

    if(numeroA > numeroB){
        alert("Numero A é maior que o número B");
    }else if (numeroB > numeroA){
        alert("Numero B é maior que o número A");

    } 


})

