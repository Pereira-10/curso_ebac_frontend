// Função de saudação:
function saudacao(nome: string): string {
    return `Olá ${nome}`;
}

const saudacaoMensagem = saudacao('Bento');
console.log(saudacaoMensagem);


// Função de multiplicação:
function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

const resultadoMultiplicacao = multiplicacao(13, 99);
console.log(resultadoMultiplicacao);