import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 10 }, // 10 usuarios virtuales durante 1 minuto
        { duration: '2m', target: 20 }, // Aumenta a 20 usuarios virtuales durante 2 minutos
        { duration: '1m', target: 0 }, // Disminuye a 0 usuarios virtuales en 1 minuto
    ],
};

export default function () {
    http.get('https://www.google.com');
    sleep(1);
}
