function validaNome(nome) {
    const regexNome = /^[a-zA-ZÁ-ÿ/s/-']+$/;
    const isValid = nome.lenght >= 2 && regexNome.test(nome);
    return isValid;
};

function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regexEmail.test(email);
    return isValid;
}

export function validaUsuario(nome, email) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);

    const usuarioValido = nomeValido && emailValido;

    if (usuarioValido) {
        return { status: true, mensagem: ''};
    } else {
        return { status: false, mesagem: 'Nome e/ou Email inválido(s).'}
    }
};