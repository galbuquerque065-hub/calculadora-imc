const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Peso (KG): ', (pesoDigitado) => {
    rl.question('Altura (M): ', (alturaDigitada) => {

        const peso = parseFloat(pesoDigitado.trim().replace(',', '.'));
        const altura = parseFloat(alturaDigitada.trim().replace(',', '.'));

            if (isNaN(peso) || isNaN(altura) || altura <= 0 ) {
                console.log(' Informações inválidas');
            } else { 
                const imc = peso / (altura ** 2 );

                let classe
                if(imc < 18.5) classe = 'Abaixo do peso. ';
                else if(imc < 25.0) classe = 'Peso normal. ';
                else if(imc < 30.0) classe = 'Sobrepeso';
                else classe = 'Obesidade';

                console.log(`Seu IMC é:  ${imc.toFixed(2)} - ${classe}`);
            }

    });
});
