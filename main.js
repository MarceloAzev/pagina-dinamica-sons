function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    // != null não é necessário, pois o JS vai retornar verdadeiro se já estiver um valor dentro da constante Elemento.
    if(elemento && elemento.localName === 'audio'){ //'audio' - função
        elemento.play();  
    }else{
        // alert('Elemento não encontrado ou seletor invalido');
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont<listaDeTeclas.length; cont++){

    const tecla = listaDeTeclas[cont];
    const instrumento = listaDeTeclas[cont].classList[1];

    //'#som_(instrumento)' ${} - local para chamar função JS
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){


        if(evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}

