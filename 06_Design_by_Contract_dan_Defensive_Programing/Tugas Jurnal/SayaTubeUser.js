const SayaTubeVideo = require("./SayaTubeVideo");

class SayaTubeUser {
  constructor(username) {
    if (!username || typeof username !== "string" || username.length > 100) {
      throw new Error("Username harus berupa string dan maksimal 100 karakter.");
    }
    this.username = username;
    this.uploadedVideos = [];
  }

  addVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error("Video harus instance dari SayaTubeVideo.");
    }
    if (video.playCount >= Number.MAX_SAFE_INTEGER) {
      throw new Error("Video tidak boleh memiliki play count yang mendekati batas maksimum integer.");
    }
    this.uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    const maxVideos = Math.min(this.uploadedVideos.length, 8);
    for (let i = 0; i < maxVideos; i++) {
      console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
    }
  }
}

module.exports = SayaTubeUser;