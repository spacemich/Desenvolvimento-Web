let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

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
        nomeOk = true
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
        emailOk = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 120) {
        txtAssunto.innerHTML = 'Limite máximo de 120 caracteres'
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.style.display = 'none'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}
function enviar1() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('formulário enviado com sucesso!')
    } else {
        alert('Para enviar necessário preencher o formulário corretamente....')
    }
}
