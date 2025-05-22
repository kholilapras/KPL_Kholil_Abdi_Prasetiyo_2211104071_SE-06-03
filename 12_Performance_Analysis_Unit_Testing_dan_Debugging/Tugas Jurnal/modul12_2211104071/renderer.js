const { CariNilaiPangkat } = require('./logic');

window.hitung = () => {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const hasil = CariNilaiPangkat(a, b);
    document.getElementById('hasil').textContent = `Hasil: ${hasil}`;
};
