import http from 'k6/http';
import { check, sleep } from 'k6';
import { url_carros } from '../urls/urls.js';

let response;

const pageCarros = {
    buscarCarros() {
        response = http.get(url_carros);
        check(response, { 'status is 200': (r) => r.status === 200 });
        return response.json();
    },

    incluirCarro(payload) {
        response = http.post(url_carros, payload);
        check(response, { 'status is 201': (r) => r.status === 201 });
        return response.json();
    }
};

export default pageCarros;
