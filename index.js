const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >=2;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeBenficioario = document.getElementById('nome-beneficiario');

    if (!validaNome(nomeBenficioario.value)){
        
    }



})

