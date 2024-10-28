import { check, sleep } from 'k6';
import pageCarros from '../helpers/pageCarros.js';

export const options = {
  stages: [
    { duration: '5m', target: 500 }, 
  ],
};

function getCars() {
  const Response = pageCarros.buscarCarros();
  check(Response, { 'Número de registros': (r) => r.length === 5 });
  sleep(1);
}

export default function () {
  getCars();
}