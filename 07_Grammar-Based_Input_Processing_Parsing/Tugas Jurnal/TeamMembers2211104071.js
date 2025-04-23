const fs = require('fs');
const path = require('path');

function ReadJSON() {
    const filePath = path.join(__dirname, 'jurnal7_2_2211104071.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Gagal membaca file JSON:', err);
            return;
        }

        try {
            const obj = JSON.parse(data);
            const members = obj.members;

            console.log('Team member list:');
            members.forEach(member => {
                const fullName = `${member.firstName} ${member.lastName}`;
                console.log(`${member.nim} ${fullName} (${member.age} ${member.gender})`);
            });

        } catch (parseErr) {
            console.error('Gagal parsing JSON:', parseErr.message);
        }
    });
}

ReadJSON();