import {
    formatPokemonItem
} from './utils';

const api = baseApiUrl => endpoint => {
    const url = `${baseApiUrl}/${endpoint}`;

    const getAllByPagination = (page, size = 10) =>
        Promise.resolve(`${url}?offset=${page * size}&limit=${size}`)
        .then(urlBuilded =>
            fetch(urlBuilded)
            .then(apiResponse => apiResponse.json())
            .then(({ results }) => results.map(pokemon => formatPokemonItem(pokemon))))
        .catch(error => console.error(error));

    const getById = id =>
        Promise.resolve(`${url}/${id}`)
        .then(urlBuilded =>
            fetch(urlBuilded)
            .then(apiResponse => apiResponse.json()))
        .catch(error => console.error(error));

    return {
        getAllByPagination,
        getById
    };
};

const baseApi = api(`https://pokeapi.co/api/v2`);

export const pokemonApi = baseApi(`pokemon`);

export const evolutionApi = baseApi(`evolution-chain`);

export const speciesApi = baseApi(`pokemon-species`);

export const abilityApi = baseApi(`ability`);
