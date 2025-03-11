
class Heroi {
    constructor(nome, idade, tipo) {
        this.name = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else {
            ataque = "shuriken";
        }
        return console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const mago = new Heroi("Gandalf", 100, "mago");
mago.atacar()
const guerreiro = new Heroi("Conan", 40, "guerreiro");
guerreiro.atacar()
const monge = new Heroi("Bruce Lee", 80, "monge");
monge.atacar()
const ninja = new Heroi("Naruto", 20, "ninja");