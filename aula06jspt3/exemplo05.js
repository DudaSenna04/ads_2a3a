class Livro{
    constructor(pNome, pPreco){ //declaração do contrutor com atributo nome nos parâmetros
        this.Nome = pNome;
        this.Preco = pPreco;

    }
    get Nome() {return this.Nome;}
    set Nome(pNome) {this.nome = pNome;}

    get Preco() {return this.Preco;}
    set Preco(pPreco) {this.preco = pPreco;}

    calcularDesconto(pDesconto){
        this.preco = this.preco - ((this.preco * pDesconto)/100);
    }
}

var obj_livro = new Livro("Usa a cabeçaaaa ",120);
obj_livro.calcularDesconto(30); //calcula o desconto do livro 
console.log("Nome do livro: " + obj_livro.nome + "custa " + obj_livro.preco + " reais");