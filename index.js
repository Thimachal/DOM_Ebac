const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
})

