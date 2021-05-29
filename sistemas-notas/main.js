function escreveMateria() {
    var materia = document.getElementById('txtMateria').value;
    var txtNota = document.getElementById('txtNota');
    var nota = txtNota.value;
    if(nota === '' || materia === '') {
        alert('Preencha todos os campos!');
        return
    }

    if(nota > 10 || nota < 0) {
        alert('A nota deve ser entre 0 e 10.');
        txtNota.value = '';
        txtNota.focus()
        return
    }

    var classificacao = classificaNota(nota);
    var resultado = `Materia: ${materia}<br>Nota: ${nota}<br>Classificação: ${classificacao}<br>`
    document.querySelector('#resultados').innerHTML += resultado;
};

function classificaNota(nota) {
    if(nota >= 6) {
        return 'Parabéns! Você foi aprovado.'
    } else if(nota > 4) {
        return 'Você está de recuperação.'
    } else {
        return 'Você foi reprovado.'
    }
};