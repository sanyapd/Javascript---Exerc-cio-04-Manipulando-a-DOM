let configuracaoatual = 'Apagada';
function apagarNovamente() {
    configuracaoatual === 'Apagada' ? configuracaoatual = 'LIGADA' : configuracaoatual = 'Apagada';
    return configuracaoatual;
}
function apagareacender() {

    if (configuracaoatual === 'Apagada')
        document.getElementById('lampada').src = 'lampada-acesa.jpg';
    else
        document.getElementById('lampada').src = 'lampada-apagada.jpg';
    apagarNovamente();
}