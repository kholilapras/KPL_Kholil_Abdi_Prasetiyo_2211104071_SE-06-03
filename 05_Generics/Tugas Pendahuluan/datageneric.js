class DataGeneric {
    constructor(data) {
      this.data = data;
    }
  
    PrintData() {
      console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
  }
  
  const nim = new DataGeneric("2211104071");
  nim.PrintData();
  