import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';

const buscaDuration = new Trend('busca_profissionais_duration');

const BASE_URL = 'https://api-staging.lacreisaude.com.br';

export const options = {
    vus: 30,
    duration: '30s',
};

export function setup() {

    const payload = JSON.stringify({
        email: __ENV.LACREI_EMAIL,
        password: __ENV.LACREI_PASSWORD,
        is_professional: false
    });

    const response = http.post(
        `${BASE_URL}/v1/lacreiid/auth/login/`,
        payload,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    check(response, {
        'Login realizado': (r) => r.status === 200
    });

    if (response.status !== 200) {
        throw new Error(`Falha no login. Status: ${response.status}`);
    }

    return {
        token: response.json('key')
    };
}

export default function (data) {

    const response = http.get(
        `${BASE_URL}/v1/lacreisaude/professionals/?search=medico`,
        {
            headers: {
                Authorization: `Bearer ${data.token}`,
                'Content-Type': 'application/json'
            }
        }
    );

    buscaDuration.add(response.timings.duration);

    check(response, {
        'Busca realizada': (r) => r.status === 200,
    });
}