// Interface Subject
class WeatherStation {
    constructor() {
        this.observers = []; // daftar observer
        this.temperature = 0;
    }

    // Menambahkan observer
    attach(observer) {
        this.observers.push(observer);
    }

    // Menghapus observer
    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Memberi notifikasi ke semua observer
    notify() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }

    // Mengubah suhu dan memberi notifikasi
    setTemperature(temp) {
        console.log(`\n WeatherStation: Suhu berubah menjadi ${temp}°C`);
        this.temperature = temp;
        this.notify();
    }
}

// Interface Observer
class PhoneDisplay {
    update(temp) {
        console.log(`PhoneDisplay: Menampilkan suhu ${temp}°C`);
    }
}

class WebDisplay {
    update(temp) {
        console.log(` WebDisplay: Update suhu ke ${temp}°C`);
    }
}

// Client Code
const weatherStation = new WeatherStation();

const phone = new PhoneDisplay();
const web = new WebDisplay();

// Registrasi observer
weatherStation.attach(phone);
weatherStation.attach(web);

// Simulasi perubahan suhu
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);

// Hapus observer
weatherStation.detach(phone);

// Perubahan lagi
weatherStation.setTemperature(34);
