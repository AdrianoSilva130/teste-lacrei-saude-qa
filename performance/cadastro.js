import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';

const cadastroDuration = new Trend('cadastro_duration');

export const options = {
    vus: 30,
    duration: '30s',
};

export default function () {

    const numero = Math.floor(Math.random() * 1000000000);
    const senha = `Teste@${numero}`;

    const payload = JSON.stringify({
        accepted_privacy_document: true,
        email: `teste${numero}@gmail.com`,
        first_name: 'Adriano',
        last_name: 'Silva',
        password1: senha,
        password2: senha,
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

    cadastroDuration.add(res.timings.duration);

    check(res, {
        'Cadastro realizado': (r) => r.status === 201,
    });
}