const fs = require('fs');
const path = require('path');

function ReadJSON() {
  const filePath = path.join(__dirname, 'tp7_2_2211104071.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Gagal membaca file:', err);
      return;
    }

    try {
      const obj = JSON.parse(data);

      console.log("Daftar mata kuliah yang diambil:");

      obj.courses.forEach((course, index) => {
        console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
      });
    } catch (parseErr) {
      console.error('Gagal parsing JSON:', parseErr);
    }
  });
}

ReadJSON();