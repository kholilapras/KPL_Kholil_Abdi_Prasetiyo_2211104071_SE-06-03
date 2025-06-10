class PusatDataSingleton {
    constructor() {
        if (PusatDataSingleton._instance) {
            throw new Error("Gunakan PusatDataSingleton.getInstance()");
        }

        // Inisialisasi array untuk menyimpan data
        this.storedData = [];

        PusatDataSingleton._instance = this;
    }

    // Static method untuk mendapatkan instance Singleton
    static getInstance() {
        if (!PusatDataSingleton._instance) {
            new PusatDataSingleton();
        }
        return PusatDataSingleton._instance;
    }

    // Mengembalikan semua data yang tersimpan
    getAllData() {
        return this.storedData;
    }

    // Menampilkan semua data ke konsol
    printAllData() {
        this.storedData.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }

    // Menambahkan satu data ke array
    addData(input) {
        this.storedData.push(input);
    }

    // Menghapus data berdasarkan indeks
    deleteData(index) {
        if (index >= 0 && index < this.storedData.length) {
            this.storedData.splice(index, 1);
        } else {
            console.log("Index tidak valid");
        }
    }
}

// Ekspor class agar bisa digunakan di file lain
module.exports = PusatDataSingleton;
