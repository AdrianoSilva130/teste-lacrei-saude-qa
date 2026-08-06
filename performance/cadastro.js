import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 30,
    duration: '30s',

    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.01'],
    },
};

export default function () {

    const numero = Math.floor(Math.random() * 1000000);

    const payload = JSON.stringify({
        accepted_privacy_document: true,
        email: `teste${numero}@gmail.com`,
        first_name: "Adriano",
        last_name: "de Araujo",
        password1: "Lacrei@2026",
        password2: "Lacrei@2026",
        is_18_years_old_or_more: true
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(
        'https://api-staging.lacreisaude.com.br/v1/lacreiid/user/',
        payload,
        params
    );

    check(res, {
        'Cadastro realizado': (r) => r.status === 201,
        'Tempo menor que 2 segundos': (r) => r.timings.duration < 2000,
    });
}