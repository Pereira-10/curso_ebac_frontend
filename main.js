// Classe abstração
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

// Classe herdeira 1
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome);

    this.aumento = function() {
        const novoSalario = this.salario * 1.1;
        this.salario = novoSalario;
    }
}

// Classe herdeira 2
function Cliente(nome, endereco) {
    this.endereco = endereco;

    Pessoa.call(this, nome);
    this.mostraEndereco = function() {
        console.log(this.endereco);
    }
}

// Instância de objeto da classe Funcionario
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.aumento();
console.log("Novo salário do funcionário: " + funcionario1.salario);

// Instância de objeto da classe Cliente
const cliente1 = new Cliente("João", "Rua Principal, 123");
cliente1.dizOi();
cliente1.mostraEndereco();

// Classe herdeira 3
function Estagiario(nome) {
    this.cargo = "Estagiário";
    this.salario = 2000;

    Pessoa.call(this, nome);

    this.aumento = function() {
        const novoSalario = this.salario * 1.07;
        this.salario = novoSalario;
    }
}

// Classe herdeira 4
function Gerente(nome) {
    this.cargo = "Gerente";
    this.salario = 10000;

    Pessoa.call(this, nome);

    this.aumento = function() {
        const novoSalario = this.salario * 1.15;
        this.salario = novoSalario;
    }
}

// Instância de objeto da classe Estagiario
const estagiario1 = new Estagiario("Pedro");
estagiario1.dizOi();
estagiario1.dizCargo();
estagiario1.aumento();
console.log("Novo salário do estagiário: " + estagiario1.salario);

// Instância de objeto da classe Gerente
const gerente1 = new Gerente("Bento");
gerente1.dizOi();
gerente1.dizCargo();
gerente1.aumento();
console.log("Novo salário do gerente: " + gerente1.salario);
