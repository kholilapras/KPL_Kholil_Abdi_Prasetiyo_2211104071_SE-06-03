const readline = require('readline');
const CovidConfig = require('./covidConfig');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const config = new CovidConfig();

function tanyaSuhu() {
    rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `, (suhuInput) => {
        const suhu = parseFloat(suhuInput);
        if (isNaN(suhu)) {
            console.log("Masukkan angka yang valid untuk suhu.");
            return tanyaSuhu();
        }
        tanyaHari(suhu);
    });
}

function tanyaHari(suhu) {
    rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ', (hariInput) => {
        const hari = parseInt(hariInput);
        if (isNaN(hari)) {
            console.log("Masukkan angka yang valid untuk hari.");
            return tanyaHari(suhu);
        }
        evaluasi(suhu, hari);
        rl.close();
    });
}

function evaluasi(suhu, hari) {
    let suhuNormal = false;
    if (config.satuan_suhu === 'celcius') {
        suhuNormal = suhu >= 36.5 && suhu <= 37.5;
    } else if (config.satuan_suhu === 'fahrenheit') {
        suhuNormal = suhu >= 97.7 && suhu <= 99.5;
    }

    if (suhuNormal && hari < config.batas_hari_deman) {
        console.log(config.pesan_diterima);
    } else {
        console.log(config.pesan_ditolak);
    }
}

tanyaSuhu();