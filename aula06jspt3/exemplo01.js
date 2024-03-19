class Livro{
    constructor(pNome){ //declaração do contrutor com atributo nome nos parâmetros
        this.Nome = pNome;

    }
    get Nome() {return this.Nome;}
    set Nome(pNome) {this.nome = pNome;}
}

var obj_livro = new Livro("Usa a cabeçaaaa");
console.log("Nome do livro: " + obj_livro.nome);