let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nameOK = false
let emailOK = false
let assuntoOK = false

nome.style.width = '35%'
email.style.width = '35%'
assunto.style.width = '25%'

function validaNome() {
    let TxtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        TxtNome.innerHTML = 'Insira um valor acima de 2 caracteres'
        TxtNome.style.color = 'red'
        TxtNome.style.backgroundColor = 'yellow'
    } else {
        TxtNome.innerHTML = 'Nome Válido'
        TxtNome.style.color = 'green'
        TxtNome.style.backgroundColor = 'pink'
        nomeOK = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
        txtEmail.style.backgroundColor = 'yellow'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        txtEmail.style.backgroundColor = 'pink'
    }

}

}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.lenght >= 120) {
        txtAssunto.innerHTML = 'Limite máximo de 120 caracteres'
        txtAssunto.style.color = 'red'
        tx
    } else {
        txtAssunto.style.display = 'none'
        txtEmail.style.color = 'green'
        assuntoOK = true
    }
    function enviar() {
        if (nomeOK == true && emailOK == true && assuntoOK == true) {
            alert('formulário enviado com sucesso!')
        } else {
            alert('Para enviar necessário preencher o formulário corretamente....')
        }
    }
}