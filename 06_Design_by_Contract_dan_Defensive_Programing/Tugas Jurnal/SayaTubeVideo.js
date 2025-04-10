class SayaTubeVideo {
    constructor(title) {
      if (!title || typeof title !== "string" || title.length > 200) {
        throw new Error("Judul video harus berupa string dan maksimal 200 karakter.");
      }
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.title = title;
      this.playCount = 0;
    }
  
    increasePlayCount(count) {
      try {
        if (typeof count !== "number" || count < 0 || count > 25000000) {
          throw new Error("Input play count harus antara 0 sampai 25.000.000");
        }
  
        const newCount = this.playCount + count;
        if (newCount > Number.MAX_SAFE_INTEGER) {
          throw new Error("Terjadi overflow pada play count.");
        }
  
        this.playCount = newCount;
      } catch (err) {
        console.error(`[ERROR] ${err.message}`);
      }
    }
  
    printVideoDetails() {
      console.log(`ID: ${this.id}`);
      console.log(`Title: ${this.title}`);
      console.log(`Play Count: ${this.playCount}`);
    }
  }
  
  module.exports = SayaTubeVideo;
  