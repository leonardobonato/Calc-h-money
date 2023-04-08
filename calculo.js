function calcularHoras () {

    //obter valores digitado pelo usuario

    const valorHora = parseFloat(document.getElementById('valor-hora').value.replace(',', '.'));
    const horaChegada = document.getElementById('hora-chegada').valueAsDate;
    const horaSaida = document.getElementById('hora-saida').valueAsDate;
    const horaIntervalo = document.getElementById('hora-intervalo').valueAsDate;
    const duracaoIntervalo = document.getElementById('duracao-intervalo').valueAsDate;

    //calcular total de horas trabalhadas

    const intervalo = duracaoIntervalo ? duracaoIntervalo.getMinutes() / 60 : 0;
    const totalHorasTrabalhadas = (horaSaida.getHours() + (horaSaida.getMinutes() / 60)) - (horaChegada.getHours() + (horaChegada.getMinutes() / 60)) - intervalo;
    

    //calcular o valor a receber

    const valorReceber = totalHorasTrabalhadas * valorHora;

    //exibir na tela

    document.getElementById('horas-trabalhadas').innerHTML = totalHorasTrabalhadas.toFixed(2).replace('.', ',') + ' horas';
    document.getElementById('valor-receber').innerHTML = valorReceber.toFixed(2).replace('.', ',');
}