namespace casting {
    // Tipo 'any' — pode receber qualquer valor
    let idade: any = 25;

    // Conversão (casting) para number
    console.log((idade as number).toFixed()); // Saída: "25"

    // Alterando o valor e convertendo para string
    idade = "25 anos";
    console.log((idade as string).length); // Saída: 7

    // Exemplo de casting incorreto (apenas para demonstração)
    // Aqui o valor não é realmente um array, por isso não deve usar forEach.
    // (idade as string[]).forEach(x => console.log(x));

    // Casting duplo — apenas demonstração (não recomendável)
    let nome: string = 35 as unknown as string;
    console.log(nome); // Saída: "35"
}