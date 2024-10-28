import { check, sleep } from 'k6';
import pageCarros from '../helpers/pageCarros.js';
import { incluirCarro } from '../json/jsonCarros.js';

export const options = {
  stages: [
    { duration: '5m', target: 500 }, 
  ],
};

function includeCars() {
    const Response = pageCarros.incluirCarro(JSON.stringify(incluirCarro));
    check(Response, { 'status is 200': (r) => r.message === "Car successfully registered!" });
}

export default function () {
    includeCars();
    sleep(1); 
}