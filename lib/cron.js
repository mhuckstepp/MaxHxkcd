import cron from 'node-cron'
import { runCron } from './scraper'

cron.schedule('59 * * * *', () => {
  runCron()
});