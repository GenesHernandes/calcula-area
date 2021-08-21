function calcular() {

    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;

    let mutiplicar = base * altura;

    document.getElementById('res').innerHTML = `Resultado:${mutiplicar}`;

}

