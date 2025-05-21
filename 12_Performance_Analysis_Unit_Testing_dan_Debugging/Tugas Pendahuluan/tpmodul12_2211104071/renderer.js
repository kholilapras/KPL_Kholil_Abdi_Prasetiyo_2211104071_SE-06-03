const { CariTandaBilangan } = require('./logic');

function proses() {
    const input = parseInt(document.getElementById("input").value);
    const result = CariTandaBilangan(input);
    document.getElementById("output").innerText = result;
}
