function AkarPersamaanKuadrat([a, b, c]) {
    const D = b ** 2 - 4 * a * c;
    if (D < 0) return []; // Tidak ada akar real
    const akarD = Math.sqrt(D);
    return [(-b + akarD) / (2 * a), (-b - akarD) / (2 * a)];
}

function HasilKuadrat([a, b]) {
    return [a ** 2, 2 * a * b, b ** 2];
}

module.exports = { AkarPersamaanKuadrat, HasilKuadrat };
