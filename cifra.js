function caesarCipherEncrypt(texto, deslocamento) {
    let resultado = '';

    for (let char of texto) {
        if (/[a-zA-Z]/.test(char)) {
            let deslocamentoBase = char === char.toUpperCase() ? 65 : 97;
            let novoChar = String.fromCharCode((char.charCodeAt(0) - deslocamentoBase + deslocamento) % 26 + deslocamentoBase);
            resultado += novoChar;
        } else {
            resultado += char;  // Mantém caracteres que não são letras
        }
    }

    return resultado;
}

function decifrarCifraCesar(texto, deslocamento) {
    let resultado = '';

    for (let char of texto) {
        if (/[a-zA-Z]/.test(char)) {
            let deslocamentoBase = char === char.toUpperCase() ? 65 : 97;
            let novoChar = String.fromCharCode((char.charCodeAt(0) - deslocamentoBase - deslocamento + 26) % 26 + deslocamentoBase);
            resultado += novoChar;
        } else {
            resultado += char;  // Mantém caracteres que não são letras
        }
    }

    return resultado;
}

document.getElementById('criptoForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio do formulário
    const texto = document.getElementById('textoCriptografar').value;
    const deslocamento = parseInt(document.getElementById('deslocamentoCripto').value);
    const resultado = caesarCipherEncrypt(texto, deslocamento);
    document.getElementById('resultadoCriptografar').textContent = resultado;
});

document.getElementById('decriptoForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o envio do formulário
    const texto = document.getElementById('textoDescriptografar').value;
    const deslocamento = parseInt(document.getElementById('deslocamentoDescripto').value);
    const resultado = decifrarCifraCesar(texto, deslocamento);
    document.getElementById('resultadoDescriptografar').textContent = resultado;
});
