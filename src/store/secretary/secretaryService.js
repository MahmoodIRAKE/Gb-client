import { api } from 'api/api';

export const getAllSecretaries = async () => {
    console.log('dsakjjk', response.data);
    const response = await QuotesClient.get('/secretary');
    console.log('dsakjjk', response.data);
    return response.data;
};
