const path = require('path');
const fs = require('fs');

function ReadJSON() {
  const filePath = path.join(__dirname, 'tp7_1_2211104071.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Gagal membaca file:', err);
      return;
    }

    try {
      const obj = JSON.parse(data);
      const namaLengkap = obj.nama.depan + ' ' + obj.nama.belakang;
      const nim = obj.nim;
      const fakultas = obj.fakultas;

      console.log(`Nama ${namaLengkap} dengan nim ${nim} dari fakultas ${fakultas}`);
    } catch (parseErr) {
      console.error('Gagal parsing JSON:', parseErr);
    }
  });
}

ReadJSON();