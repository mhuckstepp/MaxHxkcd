import cron from 'node-cron'
import { runCron  } from './scraper'

cron.schedule('30 2 * * *', () => {
  runCron();
});

// let count = 2452
// cron.schedule('* * * * *', () => {
//   automateDownloads(count);
// });