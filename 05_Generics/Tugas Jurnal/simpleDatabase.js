class SimpleDataBase {
    constructor() {
      this.storedData = [];
      this.inputDates = [];
    }
  
    AddNewData(data) {
      this.storedData.push(data);
      this.inputDates.push(new Date());
    }
  
    PrintAllData() {
      for (let i = 0; i < this.storedData.length; i++) {
        console.log(
          `Data ${i + 1} berisi: ${this.storedData[i]}, yang disimpan pada waktu UTC: ${this.inputDates[i].toUTCString()}`
        );
      }
    }
  }
  
const myData = new SimpleDataBase();

myData.AddNewData(12);
myData.AddNewData(34);
myData.AddNewData(56);
myData.PrintAllData();  