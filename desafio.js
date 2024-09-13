// Definindo a classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      // Define a descrição do ataque com base no tipo do herói
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque desconhecido';
      }
  
      // Exibe a mensagem do ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
  const heroi2 = new Heroi('Gandalf', 1000, 'mago');
  const heroi3 = new Heroi('Bruce', 45, 'monge');
  const heroi4 = new Heroi('Ninja', 25, 'ninja');
  
  // Testando o método atacar de cada herói
  heroi1.atacar(); // Saída: O guerreiro atacou usando espada
  heroi2.atacar(); // Saída: O mago atacou usando magia
  heroi3.atacar(); // Saída: O monge atacou usando artes marciais
  heroi4.atacar(); // Saída: O ninja atacou usando shuriken
  