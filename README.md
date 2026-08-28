# 🧮 Calculadora de IMC

Programa em Node.js que calcula o Índice de Massa Corporal (IMC) do usuário a partir do peso e da altura informados via terminal.

## 📋 Funcionalidades

- Solicita peso (kg) e altura (m) via terminal, usando o módulo `readline`.
- Trata entradas com espaços extras (`.trim()`) e vírgula decimal (`.replace(',', '.')`).
- Valida se os valores digitados são números válidos (`isNaN`) e se a altura é maior que zero.
- Calcula o IMC com a fórmula: `peso / (altura ** 2)`.
- Classifica o resultado em: Abaixo do peso, Normal, Sobrepeso ou Obesidade.
- Exibe o resultado formatado com duas casas decimais (`.toFixed(2)`).

## 🚀 Como executar

Pré-requisito: ter o [Node.js](https://nodejs.org) instalado.

```bash
node imc.js
```

Depois é só digitar o peso e a altura quando solicitado.


## 🛠️ Tecnologias

- Node.js
- Módulo `readline`

## 👤 Autor

Gabriel — [GitHub](https://github.com/galbuquerque065-hub)