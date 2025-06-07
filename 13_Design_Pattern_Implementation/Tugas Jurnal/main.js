// Import class Singleton dari file lain
const PusatDataSingleton = require('./PusatDataSingleton');

// === Bagian A & B ===
// Buat dua variabel dengan tipe PusatDataSingleton
const data1 = PusatDataSingleton.getDataSingleton();
const data2 = PusatDataSingleton.getDataSingleton();

// === Bagian C ===
// Tambahkan data anggota kelompok dan asisten praktikum ke data1
data1.addSebuahData("Anggota 1 - Thom Haye");
data1.addSebuahData("Anggota 2 - Jat Idzes");
data1.addSebuahData("Asisten - Denny Landzaat");

// === Bagian D ===
// Print isi data2, seharusnya menampilkan semua data yang ditambahkan lewat data1
console.log("\n--- Isi data2 ---");
data2.printSemuaData();

// === Bagian E ===
// Hapus data asisten (indeks ke-2 = elemen ketiga)
data2.hapusSebuahData(2);

// === Bagian F ===
// Cek kembali isi data1, asisten seharusnya sudah tidak muncul
console.log("\n--- Isi data1 setelah hapus asisten ---");
data1.printSemuaData();

// === Bagian G ===
// Tampilkan jumlah data yang tersisa di kedua variabel (harus sama, karena Singleton)
console.log(`\nJumlah data di data1: ${data1.getSemuaData().length}`);
console.log(`Jumlah data di data2: ${data2.getSemuaData().length}`);