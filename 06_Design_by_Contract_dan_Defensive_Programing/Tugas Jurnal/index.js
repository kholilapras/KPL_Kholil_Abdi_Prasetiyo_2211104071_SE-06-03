const SayaTubeVideo = require("./SayaTubeVideo");
const SayaTubeUser = require("./SayaTubeUser");

const user = new SayaTubeUser("Kholil");

const judulFilm = [
  "Review Film Home Alone oleh Kholil",
  "Review Film Home Alone 2: Lost in New York oleh Kholil",
  "Review Film Home Alone 3 oleh Kholil",
  "Review Film Home Alone 4: Taking Back the House oleh Kholil",
  "Review Film Home Alone: The Holiday Heist oleh Kholil",
  "Review Film Home Sweet Home Alone oleh Kholil",
  "Review Film The Making of Home Alone oleh Kholil",
  "Review Film Behind the Scenes Home Alone oleh Kholil",
  "Review Film Home Alone Reboot oleh Kholil",
  "Review Film Home Alone Christmas Edition oleh Kholil"
];

judulFilm.forEach(judul => {
  const video = new SayaTubeVideo(judul);
  video.increasePlayCount(1000000);
  user.addVideo(video);
});

user.printAllVideoPlaycount();
console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);