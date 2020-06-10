
function showValue(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    document.getElementById('result').value = eval(document.getElementById('result').value);
}

function reset() {
    document.getElementById('result').value = 0;

}