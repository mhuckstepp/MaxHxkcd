const cron = require("node-cron");
const { runCron } = require("./scraper");

cron.schedule("59 2 * * *", () => {
  runCron();
});

// let count = 2465
// cron.schedule('* * * * *', () => {
//   automateDownloads(count);
// });
