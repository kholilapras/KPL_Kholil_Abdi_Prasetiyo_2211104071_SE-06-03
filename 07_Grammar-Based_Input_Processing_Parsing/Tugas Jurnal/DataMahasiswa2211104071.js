const fs = require('fs');
const path = require('path');

function ReadJSON() {
    const filePath = path.join(__dirname, 'jurnal7_1_2211104071.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Gagal membaca file JSON:', err);
            return;
        }

        try {
            const mhs = JSON.parse(data);

            console.log('===== DATA MAHASISWA =====');
            console.log('Nama Lengkap     :', mhs.firstName, mhs.lastName);
            console.log('Jenis Kelamin    :', mhs.gender);
            console.log('Umur             :', mhs.age);
            console.log('Alamat:');
            console.log('  Jalan          :', mhs.address.streetAddress);
            console.log('  Kota           :', mhs.address.city);
            console.log('  Provinsi       :', mhs.address.state);
            console.log('Mata Kuliah:');
            mhs.courses.forEach((course, index) => {
                console.log(`  ${index + 1}. [${course.code}] ${course.name}`);
            });
        } catch (parseErr) {
            console.error('Gagal parsing JSON:', parseErr.message);
        }
    });
}

ReadJSON();