class DoorMachine {
    constructor() {
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }

    unlock() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        }
    }

    lock() {
        if (this.state === "Terbuka") {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        }
    }
}

const door = new DoorMachine();
console.log("Membuka pintu...");
door.unlock();

console.log("Mengunci pintu kembali...");
door.lock();

export default DoorMachine;
