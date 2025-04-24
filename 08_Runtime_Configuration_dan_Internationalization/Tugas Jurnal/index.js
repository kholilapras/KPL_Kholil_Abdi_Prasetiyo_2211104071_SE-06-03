const readline = require('readline');
const BankTransferConfig = require('./BankTransferConfig');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const config = new BankTransferConfig().config;
const lang = config.lang;

function ask(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}

(async () => {
    const prompt = lang === 'en' ? 'Please insert the amount of money to transfer: ' : 'Masukkan jumlah uang yang akan di-transfer: ';
    const amount = parseInt(await ask(prompt));

    const fee = amount <= config.transfer.threshold
        ? config.transfer.low_fee
        : config.transfer.high_fee;

    const total = amount + fee;

    if (lang === 'en') {
        console.log(`Transfer fee = ${fee}`);
        console.log(`Total amount = ${total}`);
    } else {
        console.log(`Biaya transfer = ${fee}`);
        console.log(`Total biaya = ${total}`);
    }

    const methodPrompt = lang === 'en' ? 'Select transfer method:' : 'Pilih metode transfer:';
    console.log(methodPrompt);
    config.methods.forEach((method, index) => {
        console.log(`${index + 1}. ${method}`);
    });

    await ask(lang === 'en' ? 'Choose a method by number: ' : 'Pilih metode dengan angka: ');

    const confirmPrompt = lang === 'en'
        ? `Please type "${config.confirmation.en}" to confirm the transaction: `
        : `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi: `;

    const confirmation = await ask(confirmPrompt);

    if (
        (lang === 'en' && confirmation === config.confirmation.en) ||
        (lang === 'id' && confirmation === config.confirmation.id)
    ) {
        console.log(lang === 'en' ? 'The transfer is completed' : 'Proses transfer berhasil');
    } else {
        console.log(lang === 'en' ? 'Transfer is cancelled' : 'Transfer dibatalkan');
    }

    rl.close();
})();
