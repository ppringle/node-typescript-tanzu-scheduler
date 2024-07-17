import {format} from 'date-fns';

const currentDate = format(new Date(), "yyyy-MM-dd HH:mm:ss");

console.log(`Triggering a demo NodeJS batch job at: ${currentDate}!`);