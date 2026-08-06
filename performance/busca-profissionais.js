import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = 'https://api-staging.lacreisaude.com.br';

export const options = {
    vus: 30,
    duration: '30s',

    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.01'],
    },
};

export function setup() {

    const payload = JSON.stringify({
        email: 'joadrito@gmail.com',
        password: 'Lacrei@2026',
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

    console.log('Login Status:', response.status);
    console.log('Login Body:', response.body);

    check(response, {
        'Login realizado': (r) => r.status === 200
    });

    const token = response.json('key');

    return { token };
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

    check(response, {
        'Status 200': (r) => r.status === 200,
        'Tempo menor que 2 segundos': (r) => r.timings.duration < 2000
    });
}