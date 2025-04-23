const fs = require('fs');
const path = require('path');

function ReadJSON() {
    const filePath = path.join(__dirname, 'jurnal7_3_2211104071.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Gagal membaca file JSON:', err);
            return;
        }

        try {
            const obj = JSON.parse(data);
            const entry = obj.glossary.GlossDiv.GlossList.GlossEntry;

            console.log('===== GlossEntry Data =====');
            console.log('ID           :', entry.ID);
            console.log('SortAs       :', entry.SortAs);
            console.log('GlossTerm    :', entry.GlossTerm);
            console.log('Acronym      :', entry.Acronym);
            console.log('Abbrev       :', entry.Abbrev);
            console.log('Definition   :', entry.GlossDef.para);
            console.log('See Also     :', entry.GlossDef.GlossSeeAlso.join(', '));
            console.log('Gloss See    :', entry.GlossSee);

        } catch (parseErr) {
            console.error('Gagal parsing JSON:', parseErr.message);
        }
    });
}

ReadJSON();