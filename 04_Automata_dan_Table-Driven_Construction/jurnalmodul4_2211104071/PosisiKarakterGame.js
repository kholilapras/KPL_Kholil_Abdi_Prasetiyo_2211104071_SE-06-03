class PosisiKarakterGame {
    constructor(NIM) {
        this.state = "Berdiri";
        this.NIM = NIM;
    }

    ubahState(aksi) {
        if (this.NIM % 3 === 0) {
            if (aksi === "S") console.log("Tombol arah bawah ditekan");
            if (aksi === "W") console.log("Tombol arah atas ditekan");
        } else if (this.NIM % 3 === 1) {
            if (this.state === "Berdiri") console.log("Posisi standby");
            if (this.state === "Tengkurap") console.log("Posisi istirahat");
        } else if (this.NIM % 3 === 2) {
            if (this.state === "Terbang" && aksi === "Jongkok") console.log("Posisi landing");
            if (this.state === "Berdiri" && aksi === "Terbang") console.log("Posisi take off");
        }
        this.state = aksi;
    }
}

const karakter = new PosisiKarakterGame(2211104071);
karakter.ubahState("Berdiri");
karakter.ubahState("Terbang");
karakter.ubahState("Jongkok");
