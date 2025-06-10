// Import class Singleton
const PusatDataSingleton = require('./PusatDataSingleton');

// Dapatkan instance Singleton
const data1 = PusatDataSingleton.getInstance();
const data2 = PusatDataSingleton.getInstance();

// Tambahkan data anggota dan asisten ke data1
data1.addData("Anggota 1 - Thom Haye");
data1.addData("Anggota 2 - Jat Idzes");
data1.addData("Asisten - Denny Landzaat");

// Tampilkan semua data melalui data2
console.log("\n--- Isi data2 ---");
data2.printAllData();

// Hapus data asisten dari data2 (indeks ke-2)
data2.deleteData(2);

// Cek isi data1 setelah penghapusan
console.log("\n--- Isi data1 setelah hapus asisten ---");
data1.printAllData();

// Tampilkan jumlah data yang tersisa (seharusnya sama)
console.log(`\nJumlah data di data1: ${data1.getAllData().length}`);
console.log(`Jumlah data di data2: ${data2.getAllData().length}`);
