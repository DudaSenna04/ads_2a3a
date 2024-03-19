class Livro{
    constructor(pNome, pPreco){ //declaração do contrutor com atributo nome nos parâmetros
        this.Nome = pNome;
        this.Preco = pPreco;

    }
    get Nome() {return this.Nome;}
    set Nome(pNome) {this.nome = pNome;}

    get Preco() {return this.Preco;}
    set Preco(pPreco) {this.preco = pPreco;}

    }

var obj_livro = new Livro("Usa a cabeçaaaa JS ",120);
var obj_livro1 = new Livro("Usa a cabeçaaaa C# ",190);

var lista = []
lista.push(obj_livro);
lista.push(obj_livro1);

console.log(lista[0])
console.log(lista[1])


