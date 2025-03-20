class KodePos {
    constructor() {
        this.kodePosTable = {
            "Batununggal": "40266",
            "Kujangsari": "40287",
            "Mengger": "40267",
            "Wates": "40256",
            "Cijaura": "40287",
            "Jatisari": "40286",
            "Margasari": "40286",
            "Sekejati": "40286",
            "Kebonwaru": "40272",
            "Maleer": "40274",
            "Samoja": "40273"
        };
    }

    getKodePos(kelurahan) {
        return this.kodePosTable[kelurahan] || "Kode Pos tidak ditemukan";
    }
}

const kodePos = new KodePos();
console.log("Daftar Kode Pos");
for (const [kelurahan, kode] of Object.entries(kodePos.kodePosTable)) {
    console.log(`${kelurahan}: ${kode}`);
}

export default KodePos;