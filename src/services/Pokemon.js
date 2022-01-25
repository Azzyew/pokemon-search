import api from './api';

export const fetch = async() => {
    const { data } = await api.get('/pokemon?limit=100');
    return data.results;
}

export const fetchById = async(id) => {
    const { data } = await api.get(`/pokemon/${id}`);
    return data.forms[0];
}

export const fetchByName = async(name) => {
    const { data } = await api.get(`/pokemon/${name}`);
    return data.forms[0];
}
