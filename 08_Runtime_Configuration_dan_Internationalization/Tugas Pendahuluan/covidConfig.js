const fs = require('fs');
const path = './covid_config.json';

class CovidConfig {
    constructor() {
        const defaults = {
            satuan_suhu: 'celcius',
            batas_hari_deman: 14,
            pesan_ditolak: 'Anda tidak diperbolehkan masuk ke dalam gedung ini',
            pesan_diterima: 'Anda dipersilahkan untuk masuk ke dalam gedung ini'
        };

        if (fs.existsSync(path)) {
            const data = fs.readFileSync(path);
            Object.assign(this, defaults, JSON.parse(data));
        } else {
            Object.assign(this, defaults);
        }
    }

    saveConfig() {
        fs.writeFileSync(path, JSON.stringify(this, null, 2));
    }

    ubahSatuan() {
        this.satuan_suhu = this.satuan_suhu === 'celcius' ? 'fahrenheit' : 'celcius';
        this.saveConfig();
    }
}

module.exports = CovidConfig;