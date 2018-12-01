'use strict';

const { StationsLoader } = require('../');

const stationsLoader = new StationsLoader();

const time = process.hrtime();
const loadStream = stationsLoader.stream();

loadStream.on('data', (system) => console.dir(system, { depth: null, colors: true }));
loadStream.on('error', (err) => console.log('unexpected error', err));
loadStream.on('end', () => {
  const [seconds, nanoseconds] = process.hrtime(time);
  console.log('Stream finished in %d seconds and %d nanoseconds', seconds, nanoseconds);
});