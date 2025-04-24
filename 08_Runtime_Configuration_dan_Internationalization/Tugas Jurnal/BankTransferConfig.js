const fs = require('fs');

class BankTransferConfig {
    constructor() {
        this.configFile = 'bank_transfer_config.json';
        this.defaultConfig = {
            lang: 'en',
            transfer: {
                threshold: 25000000,
                low_fee: 6500,
                high_fee: 15000
            },
            methods: ['RTO (real-time)', 'SKN', 'RTGS', 'BI FAST'],
            confirmation: {
                en: 'yes',
                id: 'ya'
            }
        };
        this.config = this.loadConfig();
    }

    loadConfig() {
        if (fs.existsSync(this.configFile)) {
            const content = fs.readFileSync(this.configFile);
            return JSON.parse(content);
        } else {
            return this.defaultConfig;
        }
    }
}

module.exports = BankTransferConfig;