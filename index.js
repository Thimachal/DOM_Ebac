const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >=2;
}




form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroA = document.getElementById('num-conta');
const numeroB = document.getElementById('val-deposito');


    if(numA > numB){
        return numA;
    }
    if (numB > numA){
        return numB;
    }
    if (numA === numB){
        alert("são iguais");
    }


    const nomeBenficioario = document.getElementById('nome-beneficiario');

    if (!validaNome(nomeBenficioario.value)){
        alert("Nome Incompleto");
    }else{
        alert("Tudo ok");
    }

    


})

