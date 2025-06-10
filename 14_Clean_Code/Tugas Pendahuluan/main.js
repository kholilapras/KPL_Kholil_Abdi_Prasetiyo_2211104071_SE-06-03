// Interface Subject
class WeatherStation {
    constructor() {
        this._observers = [];           // Daftar observer yang terdaftar
        this._temperature = 0;          // Nilai suhu saat ini
    }

    // Menambahkan observer ke daftar
    attach(observer) {
        this._observers.push(observer);
    }

    // Menghapus observer dari daftar
    detach(observer) {
        this._observers = this._observers.filter(obs => obs !== observer);
    }

    // Memberi notifikasi ke semua observer
    notifyObservers() {
        this._observers.forEach(observer => {
            observer.update(this._temperature);
        });
    }

    // Mengubah suhu dan memberi notifikasi ke observer
    setTemperature(temperature) {
        console.log(`\nWeatherStation: Suhu berubah menjadi ${temperature}°C`);
        this._temperature = temperature;
        this.notifyObservers();
    }
}

// Interface Observer - Menampilkan suhu di layar ponsel
class PhoneDisplay {
    update(temperature) {
        console.log(`PhoneDisplay: Menampilkan suhu ${temperature}°C`);
    }
}

// Interface Observer - Menampilkan suhu di web
class WebDisplay {
    update(temperature) {
        console.log(`WebDisplay: Update suhu ke ${temperature}°C`);
    }
}

// Client Code
const weatherStation = new WeatherStation();

const phoneDisplay = new PhoneDisplay();
const webDisplay = new WebDisplay();

// Registrasi observer
weatherStation.attach(phoneDisplay);
weatherStation.attach(webDisplay);

// Simulasi perubahan suhu
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);

// Menghapus observer PhoneDisplay
weatherStation.detach(phoneDisplay);

// Simulasi perubahan suhu berikutnya
weatherStation.setTemperature(34);
