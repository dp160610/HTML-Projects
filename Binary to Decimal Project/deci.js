

function bintodec(){
    const binary = document.getElementById('bin').value;
    const decimal = parseInt(binary, 2);
    document.getElementById('dec1').value =  decimal;
}